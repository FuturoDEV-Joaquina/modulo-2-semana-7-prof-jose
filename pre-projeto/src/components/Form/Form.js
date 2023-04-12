import { useEffect, useState } from "react";

const Form = props => {
  const {pet} = props;
  const [form, setForm] = useState({
    nome: pet ? pet.nome : '',
    idade: pet ? pet.idade : '',
    especie: pet ? pet.especie : '',
    raca: pet ? pet.raca : '',
    responsavel: pet ? pet.responsavel : ''
  });
  const [prevFormData, setPrevFormData] = useState([]);

  useEffect(()=>{
    const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
    setPrevFormData(data)
  })

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(form);

    localStorage.setItem('pets', JSON.stringify([...prevFormData, form]));

    props.handleAberto(false);
  }

  return(
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Nome:
        <input type="text" name="nome" 
        onChange={event => handleChange(event)} value={form.nome} required/>
      </label>
      <br />

      <label>
        Idade:
        <input type="number" name="idade" 
        onChange={event => handleChange(event)} value={form.idade} required/>
      </label>
      <br />
      
      <label>
        Espécie:
        <input type="text" name="especie" 
        onChange={event => handleChange(event)} value={form.especie} required/>
      </label>
      <br />
      
      <label>
        Raça:
        <input type="text" name="raca" 
        onChange={event => handleChange(event)} value={form.raca} required/>
      </label>
      <br/>

      <label>
        Telefone do Responsável:
        <input type="tel" name="responsavel" 
        onChange={event => handleChange(event)} value={form.responsavel} 
        pattern="\([0-9]{2}\)[0-9]{5}-[0-9]{4}" required/>
      </label>

      <br />
      
      <button type="submit">Salvar</button>
      <button onClick={() => props.handleAberto(false)}>Cancelar</button>
    </form>
  )

}

export default Form;