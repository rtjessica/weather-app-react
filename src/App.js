import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <div className="card w-75">
            <div className="card-body">
              <Search defaultCity="New York" />
            </div>
          </div>
          <Footer />
        </header>
      </div>
    </div>
  );
}

export default App;
