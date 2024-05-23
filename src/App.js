import React, { useState } from 'react';
import './App.css';
import Switch from './switch';
function App() {
  const [checked, setChecked] = useState(false);

  const toggle = ()=>{
    let button = document.querySelector(".toggle-button");
  let buttonWrapper = document.querySelector(".button-wrapper");
  let pWrapper = document.querySelector(".p-wrapper");
  if(checked === false){
    setChecked(true)
  button.style.left = "50%";
  buttonWrapper.style.backgroundColor = "rgb(6, 123, 233)";
  pWrapper.style.backgroundColor = "white";
  pWrapper.style.left = "100%";
  }else {
    setChecked(false);
    buttonWrapper.style.backgroundColor = "gray";
    pWrapper.style.backgroundColor = "white";
  pWrapper.style.left = "0px";
  button.style.left = "-8px";
  }
  }

  return (
    <div className="App">

<Switch handleToggle={toggle} />

    </div>
  );
}

export default App;
