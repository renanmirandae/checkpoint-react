import '../css/cardContainer.css';

function CardContainer(props)
{
    return(
        <div className="card-container">
            {props.listPlayer.length == 0 ? <h1 className='message-not-player'>Você ainda não adicionou jogadores :/</h1> : props.children}
        </div>
    );
}

export default CardContainer;