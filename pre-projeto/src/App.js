import Popup from "./components/Popup/Popup";
import Lista from "./components/Lista/Lista";
import { useState, useEffect } from "react";
function App() {
  const [pets, setPets] = useState([]);
  const [showLista, setShowLista] = useState(true);

  const updatePets = value => {
    setPets(value)
  }

  const updateShowLista = value => {
    setShowLista(value)
  }

  useEffect(() => {
    const data = localStorage.getItem('pets') ? JSON.parse(localStorage.getItem('pets')) : [];
    setPets(data);
  }, [])

  return (
    <div>
      <Popup updatePets={updatePets} pets={pets} updateShowLista={updateShowLista}/>
      { showLista && <Lista pets={pets}/> }
    </div>
  );
}

export default App;
