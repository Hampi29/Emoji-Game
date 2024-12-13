// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {win, score, playagain} = props
  const onclikingplay = () => {
    playagain()
  }
  const imgurl = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = win ? 'Won' : 'Lose'
  const scoretxt = win ? 'Best Score' : 'Score'
  return (
    <div className="card">
      <div>
        <h1>You {text}</h1>
        <p>{scoretxt}</p>
        <p>{score}/12</p>
        <button onClick={onclikingplay}>Play again</button>
      </div>
      <img src={imgurl} alt="win or lose" className="imgg" />
    </div>
  )
}

export default WinOrLoseCard
