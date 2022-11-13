import "../css/card.css";

const Card = (props) =>
{
    return(
        <div className="card">
            <img className="img-player" src={props.img} />
            <h1 className="card-title-name">{props.name + " " + props.lastname}</h1>
            <h2 className="card-title-lastname">{props.team}</h2>
        </div>
    );
}

export default Card;