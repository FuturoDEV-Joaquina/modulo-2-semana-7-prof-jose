import './Lista.css';

import ItemLista from "./ItemLista";
import { useEffect, useState } from 'react';

const Lista = props => {

  const [pets, setPets] = useState([]);
  const [selectedPets, setSelectedPets] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
    setPets(data);
    setSelectedPets(data);
  }, []);
  
  /*
  * Função responsável por filtrar os itens que serão mostrados na lista
  */
  const handleFiltro = event => {
    const selected = pets.every(pet => pet.castrado === event.target.checked);
    setSelectedPets(selected);
  }

  return(
    <div>
      <form>
        <b>Filtro</b> <br/>
        <label>
          Castrado 
          <input type="checkbox" name="castrado" 
          onChange={event => handleFiltro(event)}/>
        </label>
      </form>
      {selectedPets && selectedPets.map(pet => <ItemLista pet={pet} pets={pets} key={pet.nome} updateAberto={props.updateAberto} updateShowLista={props.updateShowLista}/>)}
    </div>
  )

}

export default Lista;