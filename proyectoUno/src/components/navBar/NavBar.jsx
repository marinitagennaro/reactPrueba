
const [contador, setContador] = useState(0);

function App() {


    return (
    <div>
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
