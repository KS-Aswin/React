import '../App.css'
import Emoji from './emojiCard'
import emojiDetails from './emojiDetails'

function App() {

  return (
    <>
      <div className='head'>
        <h3>emojipedia</h3>
      </div>
      <div className='emojiCard'>
        {emojiDetails.map((details, index) => (
          <Emoji
            key={index}
            emoji={details.emoji}
            name={details.name}
            meaning={details.meaning}
          />
        ))}
      </div>
    </>
  );
}

export default App
