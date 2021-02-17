import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import banner from "./assets/2219.jpg";

function App() {
    return (
        <div className="App">
            <Navbar />
            <img src={banner} className="banner"></img>
            <h1 style={{ textAlign: "center" }}>See Curata in action</h1>
        </div>
    );
}

export default App;
