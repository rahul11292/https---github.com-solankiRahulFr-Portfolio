import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



window.addEventListener('wheel', function(e) {
  var x = document.getElementById("toast")
  x.innerHTML = `<div id="desc">Switch to next page nothing to scroll :)</div>`
  x.className = "show";
  
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
});

window.addEventListener('touchmove', function(e) {
  var x = document.getElementById("toast")
  x.innerHTML = `<div id="desc">Switch to next page nothing to scroll :)</div>`
  x.className = "show";
  
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
});