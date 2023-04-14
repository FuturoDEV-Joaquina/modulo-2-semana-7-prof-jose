import Popup from "./components/Popup/Popup";
import Lista from "./components/Lista/Lista";
import { useState, useEffect } from "react";
function App() {
  const [pets, setPets] = useState([]);
  const [showLista, setShowLista] = useState(true);
  const [aberto, setAberto] = useState(false);

  const updatePets = value => {
    setPets(value);
  }

  const updateShowLista = value => {
    setShowLista(value)
  }

  const updateAberto = valor => {
    setAberto(valor);
  }

  useEffect(() => {
    const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
    setPets(data);
  }, [])

  return (
    <div>
      <Popup updateAberto={updateAberto} aberto={aberto} updatePets={updatePets} pets={pets} updateShowLista={updateShowLista}/>
      { showLista && <Lista pets={pets} updateAberto={updateAberto} updateShowLista={updateShowLista} updatePets={updatePets}/> }
    </div>
  );
}

export default App;
