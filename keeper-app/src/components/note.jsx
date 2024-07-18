import '../App.css'
function Note(props){
    return(
        <>
            <div className='note'>
                <h1>{props.title}</h1>
                <div className='qA'>
                    <p>{props.question}</p>
                    <p>{props.answer}</p>
                </div>
            </div>
        </>
    )
}

export default Note