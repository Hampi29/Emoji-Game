/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, totalscore: 0, isHomepage: true, clickedemojis: []}
  emojiclicked = id => {
    const {score, totalscore, clickedemojis} = this.state
    if (score === 11 && !clickedemojis.includes(id)) {
      this.setState({score: 12, totalscore: 12, isHomepage: false})
    } else if (clickedemojis.includes(id)) {
      if (score > totalscore || score === 12) {
        this.setState({totalscore: score, isHomepage: false})
      } else {
        this.setState({isHomepage: false})
      }
    } else {
      this.setState(prev => ({
        clickedemojis: [...prev.clickedemojis, id],
        score: prev.score + 1,
      }))
    }
  }
  playagain = () => {
    const {score, totalscore} = this.state
    if (score > totalscore) {
      this.setState({
        score: 0,
        totalscore: score,
        isHomepage: true,
        clickedemojis: [],
      })
    } else {
      this.setState({score: 0, isHomepage: true, clickedemojis: []})
    }
  }
  render() {
    const {emojisList} = this.props
    const {score, totalscore, isHomepage} = this.state
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const win = score === 12 ? true : false
    return (
      <div>
        <div className="bg-container">
          <NavBar
            score={score}
            totalscore={totalscore}
            isHomepage={isHomepage}
          />
          {isHomepage ? (
            <ul className="emojicardlist">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  emojiitem={each}
                  emojiclicked={this.emojiclicked}
                />
              ))}
            </ul>
          ) : (
            <div>
              <WinOrLoseCard
                win={win}
                score={score}
                playagain={this.playagain}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
