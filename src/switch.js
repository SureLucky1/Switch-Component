import React, { useState, useEffect } from 'react';
import './App.css';
function Switch({handleToggle}) {
const [disabled, setDisable] = useState(false);

const disable = ()=>{
  const button = document.querySelector(".toggle-button");
  const buttonWrapper = document.querySelector(".button-wrapper");
if(disabled === true){

setDisable(false);
if(button.style.left === "50%"){
  buttonWrapper.style.opacity = "1";

}else{
  buttonWrapper.style.opacity = "1";
}
buttonWrapper.style.cursor = "pointer";
button.style.cursor = "pointer";
}else{
  setDisable(true);
  buttonWrapper.style.opacity = "0.5";
  buttonWrapper.style.cursor = "not-allowed";
  button.style.cursor = "not-allowed";
  button.style.backgroundColor = "white";
}
}

useEffect(()=>{
  const button = document.querySelector(".toggle-button");
const buttonWrapper = document.querySelector(".button-wrapper");

  if(disabled === true){
    button.addEventListener("mouseover", function(){
      button.style.backgroundColor = "white";
    });
    buttonWrapper.addEventListener("mouseover", function(){
      button.style.backgroundColor = "white";
    });

  }else if(disabled === false){
    button.addEventListener("mouseover", function(){
      button.style.backgroundColor = "rgb(85, 255, 85)";
    });
    button.addEventListener("mouseout", function(){
      button.style.backgroundColor = "white";
    });
  
     buttonWrapper.addEventListener("mouseover", function(){
     button.style.backgroundColor = "rgb(85, 255, 85)";
   });
  
     buttonWrapper.addEventListener("mouseout", function(){
     button.style.backgroundColor = "white";
   });
  }}, [disabled])



  return (
      <div className='wrapper'>

<div class="Wrapper" >
<button class="button-wrapper" onClick={handleToggle} onChange={(checked)=>{}} disabled={disabled? true:false} >
<span class="toggle-button" disabled={disabled? true:false}></span>
</button>
</div>

<div className='p-wrapper'>
</div>

<div className='p-group'>
<p>If you offer me a valuable opportunity to learn and work, I will sincerely appreciate it. Thank you.</p>
</div>

<button className="disabled" onClick={disable}>Toggle Disabled</button>
      </div>


  );
}


export default Switch;
