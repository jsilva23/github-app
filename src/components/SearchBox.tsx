import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import "../css/SearchBox.css";

function SearchBox() {
  const [inputValue, setInputValue] = useState("");
  const { Search } = useContext(AppContext);

  const handleSearch = () => {
    Search(inputValue);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          console.log(event.target.value);
        }}
        placeholder="GitHub username"
        required
      />
      <button onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default SearchBox;
