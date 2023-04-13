import './Lista.css';

import ItemLista from "./ItemLista";

const Lista = props => {

  const {pets} = props;

  return(
    <table>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Especie</th>
        <th>Raça</th>
      </tr>
      {pets.map(pet => <ItemLista pet={pet} key={pet.nome} />)}
    </table>
  )

}

export default Lista;