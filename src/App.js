import './App.css';
import logo from "./picture/icons8-альпы-40.png"
import PlacePage from "./components/PlacePage/PlacePage";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img className="App-logo" src={logo}/>
                <p>LogIn</p>
            </header>
            <h2> Choose the city </h2>

            <PlacePage/>
        </div>
    );
}

export default App;
