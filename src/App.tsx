import "./App.css"
import About from "./components/About"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
    console.log("Labas :D")

    return (
        <div className="App">
            <Navbar/>
            <About />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App
