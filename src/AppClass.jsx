import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import "./style.css"

export default class AppClass extends Component{
  
  imageData = ()=>{
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


  render(){

    const data = this.imageData()
    return <div >
      <h1 style={{textAlign:"center"}}>Kalvium Galary</h1>
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
  }


  // code here
}
