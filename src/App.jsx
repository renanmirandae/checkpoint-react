import { useState } from 'react';
import Form from "./components/Form";
import Card from "./components/Card";
import CardContainer from './components/CardContainer';
import './css/style.css';

function App()
{
    //Create Hooks with useState
    const [formData, setFormData] = useState({name:"", lastname:"", img:"", team:""});
    const [player, setPlayer] = useState([]);

    const handlerSubmit = event =>
    {
        event.preventDefault();
        
        //Validations
        if(formData.name === "" || formData.name.length < 3)
        {
            alert("Digite um nome válido");
        }else if(formData.lastname === "" || formData.lastname.length < 2)
        {
            alert("Digite um sobrenome válido");
        }else
        {
            setPlayer([...player, {id:formData.name + formData.lastname,name: formData.name, lastname:formData.lastname, team: formData.team, img: formData.img}]);
            setFormData({...formData, name:"", lastname:"", img:"", team:""});
        }

    }
    return(
        <>
        <div className="container-add-player">
            <h1>Adicionar novo Jogador</h1>
            <Form setFormData={setFormData} handlerSubmit={handlerSubmit} formData={formData}/>
        </div>
        <CardContainer listPlayer={player}>
            {player.map(element => <Card key={element.id} img={element.img} name={element.name} lastname={element.lastname} team={element.team}/>)}
        </CardContainer>

        </>
    );
}

export default App;