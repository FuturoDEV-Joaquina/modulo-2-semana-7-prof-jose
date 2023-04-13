import { useState } from "react";
import Form from "../Form/Form";

const Popup = props => {
  const [aberto, setAberto] = useState(false);

  const updateAberto = valor => {
    setAberto(valor);
  }

  return(
    <>
      { !aberto && 
        <button className="btn" 
        onClick={ () => {setAberto(true); props.updateShowLista(false)} }>
          Adicionar Pet
        </button> 
      }
      { aberto && <Form handleAberto={updateAberto} updatePets={props.updatePets} pets={props.pets} updateShowLista={props.updateShowLista}/> }
    </>
  );
}

export default Popup;