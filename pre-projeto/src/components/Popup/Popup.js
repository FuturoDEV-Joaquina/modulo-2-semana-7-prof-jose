import Form from "../Form/Form";

const Popup = props => {
  const {aberto} = props
  return(
    <>
      { !aberto && 
        <button className="btn" 
        onClick={ () => {props.updateAberto(true); props.updateShowLista(false)} }>
          Adicionar Pet
        </button> 
      }
      { aberto && <Form updateAberto={props.updateAberto} updatePets={props.updatePets} pets={props.pets} updateShowLista={props.updateShowLista}/> }
    </>
  );
}

export default Popup;