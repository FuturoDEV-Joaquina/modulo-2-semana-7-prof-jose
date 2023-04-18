const ItemLista = props => {
  const {pet} = props;

  const selectPet = pet => {
    localStorage.setItem('selectedPet', JSON.stringify(pet));
  }

  const handleForm = () => {
    props.updateAberto(true); 
    props.updateShowLista(false);
  }
  
  return(
    <div className="item-lista">
      <div>{pet.nome}</div>
      <div>
        <button onClick={() => {selectPet(pet); handleForm();}}>Info</button>
      </div>
    </div>
  )
}

export default ItemLista;