import { Component } from "react";

import './card-styles.css'

class Card extends Component {
  render() {
    let p = this.props.monster;
    return (
      <div className="card-container" key={p.id}>
        <img
          src={`https://robohash.org/${p.id}?set=set2&size=180x180`}
          alt={`monster ${p.name}`}
        />
        <h2>{p.name}</h2>
        <p>{p.email}</p>
      </div>
    );
  }
}

export default Card;
