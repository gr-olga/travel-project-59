import './App.css';
import logo from "./picture/icons8-альпы-40.png"
import PlacePage from "./components/PlacePage/PlacePage";
import {Route, Routes} from "react-router-dom";
import Attraction from "./components/Attraction/Attraction";
import AttractionDetails from "./components/AttractionDetails/AttractionDetails";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img className="App-logo" src={logo}/>
                <p>LogIn</p>
            </header>
            <h2> Choose the city </h2>
            <Routes>
                <Route path='/' element={<PlacePage/>}/>
                <Route path='/:city' element={<Attraction/>}/>
                <Route path='/:city/:id' element={<AttractionDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
