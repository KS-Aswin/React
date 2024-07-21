import '../App.css'
import cars from './carDetails'

function App() {

  const [honda,tesla]=cars;

  const {speedStats:{topSpeed:hondaTopSpeed}} = honda;
  const {coloursByPopularity:[hondaTopColour]}=honda;

  const {speedStats:{topSpeed:teslaTopSpeed}} = tesla;
  const {coloursByPopularity:[teslaTopColour]}=tesla;

  return (
    <>
      <div className='table'>
        <table>
          <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
          </tr>
          <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
          </tr>
          <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App
