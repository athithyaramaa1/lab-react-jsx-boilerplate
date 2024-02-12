import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";
import "./style.css";
export default class AppClass extends Component {
  render() {
    const ImageData = this.props.data;

    return (
      <>
        <h1 style={{ textAlign: "center" }}> Kalvium Gallery</h1>
        <div className="grid-container">
          {ImageData.map((ele, idx) => {
            return (
              <div className="image" key={idx}>
                <img src={ele.img} alt="" />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
