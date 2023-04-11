import FunctionComponent from "./components/FunctionComponent/FunctionComponent";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import LifeCycle from "./components/LifeCycle/LifeCycle";

function App() {
  return (
  <div>
    <FunctionComponent name="José"/>
    <ClassComponent name="Pedro"/>
    <LifeCycle />
  </div>
  );
}

export default App;
