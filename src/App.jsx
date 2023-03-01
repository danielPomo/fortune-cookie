import './App.css'
import {useState} from "react"
import FortuneAuthor from "./components/FortuneAuthor"
import FortuneCard from "./components/FortuneCard"
import quotes from "./data/phrases.json"

function App() {
  const[index, setIndex] = useState(0)

  const changeFortune = () => {
      setIndex(Math.floor(Math.random()*quotes.length))
  }
  return (
    <div className="App">
      <h1>Galletas de la Fortuna</h1>
      <button
      onClick = {changeFortune}>Probar mi suerte</button>
      <FortuneCard
      quote = {quotes[index]}
      />
      <FortuneAuthor
      quote = {quotes[index]}
      />
      </div>
  )
}

export default App
