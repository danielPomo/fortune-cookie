import './App.css'
import {useState} from "react"
import FortuneAuthor from "./components/FortuneAuthor"
import FortuneCard from "./components/FortuneCard"
import quotes from "./data/phrases.json"

function App() {

  const imgPaths = ["/img/fondo1.png", "/img/fondo2.png", "/img/fondo3.png", "/img/fondo4.png"]

  const[index, setIndex] = useState(0)
  const [bgIndex, setBgIndex] = useState(0)

  const changeFortuneAndBgImage = () => {
    setIndex(Math.floor(Math.random()*quotes.length))
    setBgIndex(Math.floor(Math.random()*imgPaths.length))
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${imgPaths[bgIndex]})` }}>
      <h1 className="App__title">Galletas de la Fortuna</h1>
      <div className="App__content">
        <button
        className="App__button"
        onClick = {changeFortuneAndBgImage}
        >Probar mi suerte</button>
        <div className='App__wrapper'>
        <FortuneCard
        quote = {quotes[index]}
        />
        </div>
      </div>
        <FortuneAuthor
        quote = {quotes[index]}
        />
      </div>
  )
}

export default App
