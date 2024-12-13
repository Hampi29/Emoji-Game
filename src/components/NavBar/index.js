// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalscore, isHomepage} = props
  return (
    <div>
      {isHomepage ? (
        <div className="navbar-cont">
          <div className="innernav">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <h1>Emoji Game</h1>
          </div>
          <div className="innernav">
            <p>Score: {score}</p>
            <p>Top Score: {totalscore}</p>
          </div>
        </div>
      ) : (
        <div className="navbar-cont">
          <div className="innernav">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <p>Emoji Game</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
