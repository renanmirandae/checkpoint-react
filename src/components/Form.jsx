import '../css/form.css';

//list of participating countries
const countries = ["Catar",
"Equador",
"Holanda",
"Senegal",
"Estados Unidos",
"Inglaterra",
"Irã",
"País de Gales",
"Argentina",
"Arábia Saudita",
"México",
"Polônia",
"França",
"Dinamarca",
"Tunísia",
"Austrália",
"Espanha",
"Alemanha",
"Japão",
"Costa Rica",
"Bélgica",
"Canadá",
"Marrocos",
"Croácia",
"Brasil",
"Sérvia",
"Suíça",
"Camarões",
"Portugal",
"Gana",
"Uruguai",
"Coreia do Sul"];

function Form()
{
    return(
    <form>
        <div>
            <label for="name">Nome</label>
            <input type="text" id="name"/>
        </div>
        <div>
            <label for="lastname">Sobrenome</label>
            <input type="text" id="lastname"/>
        </div>
        <div>
            <label>Países</label>
            <select id="countries">
                {countries.map(element => <option>{element}</option>)}
            </select>
        </div>
        <button type="submit" id='button-submit'>Adicionar</button>
    </form>
    );
}

export default Form;