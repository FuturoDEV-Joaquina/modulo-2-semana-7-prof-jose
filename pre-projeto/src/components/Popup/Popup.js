import { useState } from "react";
import Form from "../Form/Form";

const Popup = props => {
  const [aberto, setAberto] = useState(false);

  const updateAberto = valor => {
    setAberto(valor);
  }

  return(
    <>
      { !aberto && <button onClick={ () => setAberto(true) }>Adicionar Pet</button> }
      { aberto && <Form handleAberto={updateAberto}/> }
    </>
  );
}

export default Popup;