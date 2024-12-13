// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiitem, emojiclicked} = props
  const {id, emojiName, emojiUrl} = emojiitem
  const onclickingemoji = () => {
    emojiclicked(id)
  }
  return (
    <li className="listitem">
      <button onClick={onclickingemoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
