import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.jsx";

if(localStorage.getItem('bestScore') === null){
  localStorage.setItem('bestScore', 0);
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <div className="primaryContainer">
      <header>
          <h1>Memory Game</h1>
      </header>
      <App/>
    </div>
  </React.StrictMode>
)

