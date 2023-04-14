import { useEffect, useState } from "react";
import './Form.css';

const Form = props => {
  const [form, setForm] = useState({});
  const [selectedPet, setSelectedPet] = useState();

  useEffect(() => {
    const pet = JSON.parse(localStorage.getItem('selectedPet'));
    if(pet){
      setSelectedPet(pet);
      setForm(pet);
    }
  }, []);
  
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleCastrado = event => {
    setForm({
      ...form,
      castrado: event.target.checked ? true : false
    })
  }

  /*
  * Função responsável por gravar as alterações do formulário 
  * inclusão e edição de itens da lista
  */
  const handleSubmit = event => {
    event.preventDefault();
    let array = []

    const formData = form;

    if(!('castrado' in form)){
      formData.castrado = false;
    }
    
    if(selectedPet){
      const updatedPets = props.pets.map(pet => {
        if(JSON.stringify(pet) === JSON.stringify(selectedPet)){
          console.log(pet);
          console.log(selectedPet);
          return formData;
        }else{
          return pet;
        }
      });
      array = updatedPets;
    }else{
      array = [...props.pets, formData];
    }
    localStorage.removeItem('selectedPet');
    localStorage.setItem('pets', JSON.stringify(array));
    props.updatePets(array);
    props.updateShowLista(true);
    props.updateAberto(false);

  }

  const handleCancel = () => {
    props.updateAberto(false);
    props.updateShowLista(true);
    localStorage.removeItem('selectedPet');
  }

  return(
    <form onSubmit={event => handleSubmit(event)}>
      <div className="form-row">
        <label>
          Nome <br/>
          <input type="text" name="nome" 
          onChange={event => handleChange(event)} value={form.nome} required/>
        </label>
      </div>

      <div className="form-row">
      <label>
        Idade <br/>
        <input type="number" name="idade" 
        onChange={event => handleChange(event)} value={form.idade} required/>
      </label>
      </div>
      
      <div className="form-row">
      <label>
        Espécie <br/>
        <input type="text" name="especie" 
        onChange={event => handleChange(event)} value={form.especie} required/>
      </label>
      </div>

      <div className="form-row">
        <label>
          Raça <br/>
          <input type="text" name="raca" 
          onChange={event => handleChange(event)} value={form.raca} required/>
        </label>

        <div className="form-row">
        <label>
          Castrado 
          <input type="checkbox" name="castrado" 
          onChange={event => handleCastrado(event)} checked={form.castrado}/>
        </label>
      </div>
      </div>
      
      <button type="submit" className="btn">Salvar</button>
      <button className="btn" onClick={() => {handleCancel()}}>
        Cancelar
      </button>
    </form>
  )

}

export default Form;