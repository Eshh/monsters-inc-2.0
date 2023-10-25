import { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";

import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    let temp = [];
    if (searchField === "") {
      temp = monsters;
    } else {
      temp = monsters.filter((m) => m.name.toLowerCase().includes(searchField));
    }
    setFilteredMonsters(temp);
  }, [searchField, monsters]);

  const onInputChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Inc. 2.0</h1>
      <SearchBox onInputChange={onInputChange} placeholder="search monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     this.getAllMonsters();
//   }

//   getAllMonsters() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(
//           (state, props) => {
//             return { monsters: users, filteredMonsters: users };
//           },
//           () => console.log(this.state)
//         )
//       );
//   }

//   handleMonsterSearch() {
//     let s = this.state.searchField;
//     if (s === "") {
//       return this.state.monsters;
//     } else {
//       let filteredData = this.state.monsters.filter((m) =>
//         m.name.toLowerCase().includes(s)
//       );
//       return filteredData;
//     }
//   }

//   onInputChange = (e) => {
//     this.setState(() => {
//       return { searchField: e.target.value.toLowerCase() };
//     });
//   };
//   render() {
//     const { onInputChange } = this;
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Inc. 2.0</h1>
//         <SearchBox
//           onInputChange={onInputChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={this.handleMonsterSearch()} />
//       </div>
//     );
//   }
// }

export default App;
