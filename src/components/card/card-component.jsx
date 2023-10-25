import "./card-styles.css";

const Card = ({ monster }) => {
  return (
    <div className="card-container" key={monster.id}>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={`monster ${monster.name}`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
