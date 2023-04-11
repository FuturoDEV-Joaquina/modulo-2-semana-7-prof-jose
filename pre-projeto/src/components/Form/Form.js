import { useState } from "react";

const Form = props => {
  const [form, setForm] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  }
  
  const handleChange = e =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return(
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="nome">Nome: </label>
      <input type="text" name="nome" onChange={e => handleChange(e)}/>
      <br />

      <label htmlFor="idade">Idade: </label>
      <input type="number" name="idade" onChange={e => handleChange(e)}/>
      <br />

      <label htmlFor="especie">Espécie: </label>
      <input type="text" name="especie"  onChange={e => handleChange(e)}/>
      <br />

      <label htmlFor="raca">Raça: </label>
      <input type="text" name="raca"  onChange={e => handleChange(e)}/>
      <br />
      
      <button type="submit">Salvar</button>
    </form>
  )

}
export default Form;