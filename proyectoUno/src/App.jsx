

import { useState } from "react";



const Titulos = ({titulos}) => {
  return <div>{titulos}</div>;
};
const [contador, setContador] = useState(0);

function App() {


  return (
    <div>
      <Titulos titulos="Almohadones"></Titulos>
      <Titulos titulos="Caminos"></Titulos>
      <Titulos titulos="Gorros"></Titulos>
      <button 
        onClick={() => {
          setContador(contador + 1)
          }}
      >
        Sumar + 1 
      </button>
      <p>El contador es: {contador}</p>
    
    </div>
    );
  }

export default App;
