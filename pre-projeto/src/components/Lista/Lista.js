import './Lista.css';

import ItemLista from "./ItemLista";
import { useEffect, useState } from 'react';

const Lista = props => {

  const [pets, setPets] = useState([]);
  const [castrado, setCastrado] = useState(false);
  const [selectedPets, setSelectedPets] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
    setPets(data);
    setSelectedPets(data);
  }, []);
  
  /*
  * Função responsável por filtrar os itens que serão mostrados na lista
  */
  const handleFiltro = () => {
    const selected = pets.filter(pet => pet.castrado === castrado);
    setSelectedPets(selected);
  }

  /*
  * Função responsável por limpar o filtro dos elementos mostrados na
  */
  const limpaFiltro = () => {
    setCastrado(false);
    setSelectedPets(pets);
  }

  return(
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <b>Filtro</b> <br/>
        <label>
          Castrado 
          <input type="checkbox" name="castrado" 
          onChange={event => setCastrado(!castrado)} checked={castrado}/>
        </label>
        <br/>
        <button onClick={handleFiltro}>Filtrar</button>
        <button onClick={limpaFiltro}>Limpar</button>
      </form>
      {selectedPets && selectedPets.map(pet => <ItemLista pet={pet} pets={pets} key={pet.nome} updateAberto={props.updateAberto} updateShowLista={props.updateShowLista}/>)}
    </div>
  )

}

export default Lista;