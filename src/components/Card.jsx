import "../css/card.css";

const Card = (props) =>
{
    return(
        <div className="card">
            <img src={props.img} />
            <h1>{props.name + " " + props.lastname}</h1>
            <h2>{props.team}</h2>
        </div>
    );
}

export default Card;