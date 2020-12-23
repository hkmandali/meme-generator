import React from 'react'; // this is required for JSX
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyInfo from "./Components/MyInfo.js"

import ToDoApp from "./Components/ToDoApp"

import ContactList from "./Components/ContactList"

import JokeMain from "./Components/JokeMain"
import MemeGeneratorApp from './Components/MemeGeneratorApp';
// ReactDOM.render(
//   <React.StrictMode>
//     <ToDoApp />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <React.StrictMode>
    <MemeGeneratorApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
