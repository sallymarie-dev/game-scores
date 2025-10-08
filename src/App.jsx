import { useState } from 'react'
import './App.css'



function App() {
  const [score, setScore] = useState(0)

  function freeThrows() {
    setScore(score + 1)
  }
  function twoPoints() {
    setScore(score + 2)
  }
  function threePoints() {
    setScore(score + 3)
  }
  function resetScore() {
    setScore(0)
  }
  return (
    <>
      <h1 className="title">Game Scores<br></br>{score}</h1>
      <div>
        <button type="button" className="btn btn-danger" onClick={freeThrows}>Free Throws</button>
        <button type="button" className="btn btn-danger" onClick={twoPoints}>Two Points</button>
        <button type="button" className="btn btn-danger" onClick={threePoints}>Three Points </button>
        <button type="button" className="btn btn-danger" onClick={resetScore}>Reset Score</button>
      </div>
    </>
  )

}

export default App
