import './App.css';
import ImageData from './Component.jsx/DataComponent';
import "./style.css"

function App(props) {
  const data = props.data
  console.log(data)

  return <div >
    <h1 className='text'>Kalvium Gallary</h1>
    <div className='main-container'>
      {
      data.map((ele, idx, data)=>{
        return <div key={idx}>
          <img src={ele.img} />
        </div>
      })
    }
    </div>
  </div>

  // code here
}

export default App;
