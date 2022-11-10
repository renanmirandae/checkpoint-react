import '../css/form.css';
import countries from '../listOfCountries'; //list of countries for <select>

function Form({formData, setFormData, handlerSubmit})
{
    return(
    <form className='form-add-player' onSubmit={handlerSubmit}>
        <div>
            <label className='lb-form-add-player' htmlFor="name">Nome</label>
            <input className='form-add-player-input' type="text" id="name" value={formData.name} placeholder="Digite o nome do jogador" onChange={event => setFormData({...formData, name: event.target.value})}/>
        </div>
        <div>
            <label className='lb-form-add-player' htmlFor="lastname">Sobrenome</label>
            <input className='form-add-player-input' type="text" id="lastname" value={formData.lastname} placeholder="Digite o sobrenome do jogador" onChange={event => setFormData({...formData, lastname:event.target.value})}/>
        </div>
        <div>
            <label className='lb-form-add-player' htmlFor='team'>Seleção</label>
            <select className='form-add-player-select' defaultValue={'DEFAULT'} id="team" onChange={event => setFormData({...formData, team: event.target.value})}>
                <option disabled hidden value={"DEFAULT"}>Selecione uma seleção</option>
                {countries.map((element, index) => <option key={index} value={element}>{element}</option>)}
            </select>
        </div>
        <div>
            <label className='lb-form-add-player' htmlFor="image">Link Imagem</label>
            <input className='form-add-player-input' type="text" id="image" value={formData.img} placeholder="https://imagens.com/1.jpg" onChange={event => setFormData({...formData, img: event.target.value})}/>
        </div>
        <button className='button-add-player' type="submit" id='button-submit'>Adicionar Jogador</button>
    </form>
    );
    }

export default Form;