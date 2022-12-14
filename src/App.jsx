import { useState } from 'react';
import Form from "./components/Form";
import Card from "./components/Card";
import CardContainer from './components/CardContainer';
import './css/style.css';
import AddPlayerContainer from './components/AddPlayerContainer';

function App()
{
    //Create Hooks with useState
    const [formData, setFormData] = useState({name:"", lastname:"", img:"", team:"DEFAULT"});
    const [player, setPlayer] = useState([]);
    const [error, setError] = useState(false);

    const handlerSubmit = event =>
    {
        event.preventDefault();
        setError(false);

        //Validations
        if(formData.name === "" || formData.name.length < 3 || formData.lastname === "" || formData.lastname.length < 2 ||
        formData.team == "" || formData.img == "")
        {
            return setError(true);
        }else
        {
            setPlayer([...player, {id:formData.name.trim() + formData.lastname.trim(),name: formData.name.trim(), lastname:formData.lastname.trim(), team: formData.team, img: formData.img.trim()}]);
            setFormData({name:"", lastname:"", img:"", team:"DEFAULT"});
        }

    }
    return(
        <>
        <AddPlayerContainer error={error}>
            <Form setFormData={setFormData} handlerSubmit={handlerSubmit} formData={formData}/>
        </AddPlayerContainer>
        <CardContainer listPlayer={player}>
            {player.map(element => <Card key={element.id} img={element.img} name={element.name} lastname={element.lastname} team={element.team}/>)}
        </CardContainer>
        </>
    );
}

export default App;