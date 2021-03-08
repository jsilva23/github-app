import Header from "./components/Header";
import ResultBox from "./components/ResultBox";
import { AppProvider } from "./contexts/AppContext";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <ResultBox />
      </AppProvider>
    </div>
  );
}

export default App;
