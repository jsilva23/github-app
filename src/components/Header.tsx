import "../css/Header.css";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const { Search } = useContext(AppContext);

  const handleSearch = () => {
    Search(inputValue);
  };

  return (
    <div className="header">
      <h1>Search for GitHub Users</h1>
      <div className="search">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            console.log(event.target.value);
          }}
          placeholder="Type a user name here"
          required
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
