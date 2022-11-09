import Card from "./components/Card";
import Form from "./components/Form";
import './css/style.css';

function App()
{
    return(
        <>
        <div className="container-add-player">
            <h1>Adicionar novo Jogador</h1>
            <Form />
        </div>
        </>
    );
}

export default App;