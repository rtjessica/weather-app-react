import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Weather App</h2>
        <Search />
      </header>
      <footer>
        <a
          href="https://github.com/rtjessica/weather-app-react"
          target="_blank"
          rel="noreferrer">
          Open-source code
        </a>
        <span>by Jess Teixeira</span>
      </footer>
    </div>
  );
}

export default App;
