import "./search-box.styles.css";

const SearchBox = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="search-box"
      onKeyUp={props.onInputChange}
    />
  );
};

export default SearchBox;
