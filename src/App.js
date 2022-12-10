import './App.css';
import Banner from './Components/Banner/Banner.js';
import Navbar from './Components/NavBar/NavBar.js'; 
import Rowpost from "./Components/Rowpost/Rowpost.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Banner/>
        <Rowpost/>
        <Rowpost/>
       
      </header>
    </div>
  );
}

export default App;
