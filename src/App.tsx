import "./App.css"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Projects />
            <Contacts />
        </div>
    )
}

export default App
