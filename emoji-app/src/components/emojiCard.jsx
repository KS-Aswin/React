import "../App.css";

function Emoji(props) {
    return (
      <>
      
        <div className="dictionary">
            <span className="emoji" role="img" aria-label="Tense Biceps">
                {props.emoji}
            </span>
            <p className="emojiHeading">{props.name}</p>
            <p className="emojiDesc">{props.meaning}</p>
        </div>
      </>
    );
  }
  
  export default Emoji;