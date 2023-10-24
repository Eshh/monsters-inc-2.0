import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        className="search-box"
        onKeyUp={this.props.onInputChange}
      />
    );
  }
}

export default SearchBox;
