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
  function startOver() {
    setScore(0)
  }
  return (
    <>
    <div className=
    "everything
    ">
      <h1 className="text">Game Scores<br></br>{score}</h1>
      <div>
        <button type="button" className="btn btn-danger" onClick={freeThrows}>Free Throws</button>
        <button type="button" className="btn btn-danger" onClick={twoPoints}>Two Points</button>
        <button type="button" className="btn btn-danger" onClick={threePoints}>Three Points </button>
        <button type="button" className="btn btn-danger" onClick={startOver}>Reset Score</button>
      </div>
      <div>Score: {score}</div>
      </div>
    </>
  )

}

export default App
