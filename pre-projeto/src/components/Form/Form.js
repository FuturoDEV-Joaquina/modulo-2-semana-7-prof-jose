import { useState } from "react";
import './Form.css';

const Form = props => {
  const {pet} = props;
  const [form, setForm] = useState({
    nome: pet ? pet.nome : '',
    idade: pet ? pet.idade : '',
    especie: pet ? pet.especie : '',
    raca: pet ? pet.raca : ''
  });
  
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    const array = [...props.pets, form];
    localStorage.setItem('pets', JSON.stringify(array));
    props.updatePets(array);
    props.updateShowLista(true);
    props.handleAberto(false);

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
      </div>
      
      <button type="submit" className="btn">Salvar</button>
      <button className="btn" onClick={() => { props.handleAberto(false);  props.updateShowLista(true);}}>
        Cancelar
      </button>
    </form>
  )

}

export default Form;