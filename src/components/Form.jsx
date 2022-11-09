import '../css/form.css';
import countries from '../listOfCountries'; //list of countries for select

function Form({formData, setFormData, handlerSubmit})
{
    return(
    <form onSubmit={handlerSubmit}>
        <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" value={formData.name} placeholder="Digite o nome do jogador" onChange={event => setFormData({...formData, name: event.target.value})}/>
        </div>
        <div>
            <label htmlFor="lastname">Sobrenome</label>
            <input type="text" id="lastname" value={formData.lastname} placeholder="Digite o sobrenome do jogador" onChange={event => setFormData({...formData, lastname:event.target.value})}/>
        </div>
        <div>
            <label>Seleção</label>
            <select defaultValue={'DEFAULT'} id="countries" onChange={event => setFormData({...formData, team: event.target.value})}>
                <option disabled hidden value={"DEFAULT"}>Selecione uma seleção</option>
                {countries.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
        </div>
        <div>
            <label htmlFor="image">Link Imagem</label>
            <input type="text" id="lastname" value={formData.img} placeholder="https://imagens.com/1.jpg" onChange={event => setFormData({...formData, img: event.target.value})}/>
        </div>
        <button type="submit" id='button-submit'>Adicionar</button>
    </form>
    );
    }

export default Form;