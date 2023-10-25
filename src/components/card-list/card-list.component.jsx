import Card from "../card/card-component";

import "./card-list.styles.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((m) => {
        return <Card key={m.id} monster={m} />;
      })}
    </div>
  );
};

export default CardList;
