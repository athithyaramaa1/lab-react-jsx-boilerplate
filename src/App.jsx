import './App.css';
import elephant from "./images/elephant.jpeg";
import "./style.css"

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {

  const data = imageData()

  return <div >
    <h1 className='text'>Kalvium Gallary</h1>
    <div className='main-container'>
      {
      data.map((ele, idx, data)=>{
        return <div key={ele.id}>
          <img src={ele.img} />
        </div>
      })
    }
    </div>
  </div>

  // code here
}

export default App;
