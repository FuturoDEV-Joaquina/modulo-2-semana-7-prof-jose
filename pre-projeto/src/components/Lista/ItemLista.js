const ItemLista = props => {
  const {pet, pets} = props;

  const selectPet = pet => {
    localStorage.setItem('selectedPet', JSON.stringify(pet));
  }

  /*
  * Função responsável pela exclusão de itens da lista
  */
  const removePet = selectedPet => {
    const petIndex = pets.findIndex(pet => JSON.stringify(pet) === JSON.stringify(selectedPet));
    pets.splice(petIndex, 1);
    localStorage.setItem('pets', JSON.stringify(pets));
  }

  const handleEdit = () => {
    selectPet(pet); 
    props.updateAberto(true); 
    props.updateShowLista(false);
  }
  
  return(
    <div className="item-lista">
      <div>{pet.nome}</div>
      <div>
        <button onClick={() => {handleEdit();}}>Editar</button>
        <button onClick={() => {removePet(pet);}}>Excluir</button>
      </div>
    </div>
  )
}

export default ItemLista;