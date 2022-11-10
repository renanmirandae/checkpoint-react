import '../css/addPlayerContainer.css';

function AddPlayerContainer(props)
{
    return(
        <div className={props.error == true ? "container-add-player-error" : "container-add-player"}>
            <h1 className='h1-add-player'>Adicionar novo Jogador</h1>
            {props.children}
            {props.error == true ? <h2 className='h2-add-player'>Por favor, verifique os dados inseridos no formulário</h2> : ''}
        </div>
    );
}

export default AddPlayerContainer;