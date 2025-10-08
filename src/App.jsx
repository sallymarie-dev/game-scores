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
  function losePoints (){
  setScore(score -1)
  }

  let winner;
  if (score > 50) {
    winner = <h2>You Sparkle!</h2>
  }
  else {
    winner = <h3>Sprinkle More sparkles to win!</h3>
  }
  let loser;
  if (score < -1) {
    loser = <h2>Sprinkle More sparkles to win!</h2>
  }
  else {
    loser = <h3>You Sparkle!</h3>
  }
  return (
    <>
      <div className=
        "everything">
        <h1 className="text">Game Scores<br></br>{score}</h1>{winner} {loser}
        <div className="btn">
          <button type="button" className="btn btn-danger" onClick={freeThrows}>Free Throws</button>
          <button type="button" className="btn btn-danger" onClick={twoPoints}>Two Points</button>
          <button type="button" className="btn btn-danger" onClick={threePoints}>Three Points </button>
          <button type="button" className="btn btn-danger" onClick={startOver}>Reset Score</button>
          <button type="button" className="btn btn-danger" onClick={losePoints}>Take points</button>
        </div>
        <div>Score: {score}</div>
      </div>
    </>
  )

}

export default App
