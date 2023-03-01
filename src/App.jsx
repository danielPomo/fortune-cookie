import './App.css'
import {useState} from "react"
import FortuneButton from "./components/FortuneButton"
import FortuneCard from "./components/FortuneCard"
import quotes from "./data/phrases.json"

function App() {
  const[index, setIndex] = useState(0)

  const changeFortune = () => {
      setIndex(Math.floor(Math.random()*quotes.length))
  }
  return (
    <div className="App">
      <h1>Probar mi suerte</h1>
      <button
      onClick = {changeFortune}>Click</button>
      <FortuneCard
      quote = {quotes[index]}
      />
      </div>
  )
}

export default App
