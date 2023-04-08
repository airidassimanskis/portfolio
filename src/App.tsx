import "./App.css"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
    return (
        <div className="App">
            <Navbar />
            <h1>!!! WORK IN PROGRESS !!!</h1>
            <About />
            <Skills/>
            <Projects />
            <Contacts />
        </div>
    )
}

export default App
