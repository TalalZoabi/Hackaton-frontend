import Welcome from "./pages/Welcome";
import Navbar from "./components/Navbar/Navbar";
import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Welcome />
        </div>
    );
}

export default App;
