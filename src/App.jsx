import { useState } from 'react'
import './App.css'
import quotes from '../src/quotes.json'
import QuotesBox from './assets/QuotesBox'

function App() {
  const arrayColor = [
    '#108B42',
    '#292929',
    '#00A1B0',
    '#00FF00',
    '#1965F3',
    '#1965F3',
  ]
  const [index, stateIndex] = useState(0)
  const [indexColor, stateColorIndex] = useState(0)

  const handleQuotes = () => {
    let indQuotes = Math.floor(Math.random() * quotes.length)
    let indexColor = Math.floor(Math.random() * arrayColor.length)
    stateIndex(indQuotes)
    stateColorIndex(indexColor)
  }

  const objbackground = {
    background: arrayColor[indexColor],
    color: arrayColor[indexColor],
  }

  return (
    <main>
      <div className="App" style={objbackground}>
        {/* for style i need insert objects */}
        <QuotesBox
          index={index}
          handleQuotes={handleQuotes}
          color={arrayColor[indexColor]}
        />
        {/* for componentes i need pass functions or usestates */}
      </div>
      <footer style={{ background: arrayColor[indexColor] }}>
        <p>Yoel Antonio Casado Gonzalez</p>
      </footer>
    </main>
  )
}

export default App
