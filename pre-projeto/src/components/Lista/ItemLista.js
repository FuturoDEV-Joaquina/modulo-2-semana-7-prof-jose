const ItemLista = props => {
  const {pet} = props;
  
  return(
    <tr className="item-lista">
      <td>{pet.nome}</td>
      <td>{pet.idade}</td>
      <td>{pet.especie}</td>
      <td>{pet.raca}</td>
    </tr>
  )
}

export default ItemLista;