import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppClass from './AppClass';
import elephant from './images/elephant.jpeg'
import ImageData from './Component.jsx/DataComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App />    */}
    <ImageData />
    {/* change the above line - for interchaning between App and AppClass */}
  </>
);
