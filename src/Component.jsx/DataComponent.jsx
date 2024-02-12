import elephant from "../images/elephant.jpeg";
import AppClass from "../AppClass";
import App from "../App";


const DataComponent = () =>{
    const ImageData = ()=>{
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
      let data = ImageData()
      console.log(data)
    return <div>
        {/* <AppClass data={data}/> */}
        <App data={data}/>
    </div>
}

export default DataComponent;