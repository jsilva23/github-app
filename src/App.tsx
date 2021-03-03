import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ResultBox from "./components/ResultBox";
import InitialState from "./components/InitialState";
import { AppProvider } from "./contexts/AppContext"
import "./css/App.css";

const result = true;

function App() {
  if (result) {
    return (
      <div className="App">
        <Header />
        <AppProvider>
          <SearchBox />
          <ResultBox />
        </AppProvider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <SearchBox />
        <InitialState />
      </div>
    );
  }
}

export default App;
