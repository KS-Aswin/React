import '../App.css'
import Header from './header'
import Note from './note'
import Footer from './footer'
import notes from './noteDetails'

function App() {

  return (
    <>
      <Header />
      <div className='noteValues'>
        {notes.map((data, index)=>(
          <Note 
            key={index}
            title={data.title} 
            question={data.question} 
            answer={data.answer}     
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
