import '../App.css'
import Add,{Substract, Multiply, Divide} from "./arithmeticOperation";

function App() {

  return (
    <>
      <h2>Arithmetic Operations</h2>
      <div className="operations">
        <h4>The result after Additional : {Add(1,2)}</h4>
        <h4>The result after Multiply : {Multiply(2,3)}</h4>
        <h4>The result after Substract : {Substract(7,2)}</h4>
        <h4>The result after Divide : {Divide(5,2)}</h4>
      </div>
    </>
  )
}

export default App
