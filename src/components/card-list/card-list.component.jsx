import { Component } from "react";
import Card from "../card/card-component";

import "./card-list.styles.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((m) => {
          return <Card key={m.id} monster={m} />;
        })}
      </div>
    );
  }
}

export default CardList;
