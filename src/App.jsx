import './App.css'
import FortuneButton from "./components/FortuneButton"
import FortuneCard from "./components/FortuneCard"
import quotes from "./data/phrases.json"
import {useState} from "react"

function App() {
  const[index, setIndex] = useState(0)
  const shuffle = () => {
    setIndex(index + 1)
  }
  return (
    <div className="App">
      <h1>Probar mi suerte</h1>
      <FortuneCard
      quote = {quotes[index]}
      />
      <FortuneButton
      onClick = {()=> shuffle}
      />
    </div>
  )
}

export default App
