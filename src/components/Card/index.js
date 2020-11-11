import "./style.css";

function Card(props) {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={props.image} />
      </div>
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
