import React, {useState} from "react";

export function DisplayColorBox(props){
    return (<div class="App">
    <div class="display" style={{backgroundColor: props.color}}>TEXT</div>
    </div>
    )
}

export function ChangeColorBtn(props){
    let color = props.btnText.toString().toLowerCase();
     const clickHandler=()=>{
         props.btnClickAct(color)
     }
     return <button class="btn" onClick={clickHandler} style={{backgroundColor:color}}>{props.btnText}</button>
}

export default function ThreeState(props){
    const[textColor, setTextColor]= useState("white");
    const changeColor = (newColor)=>{
        setTextColor(newColor);
    }
    return(
        <div class="App">

            <DisplayColorBox color={textColor} ></DisplayColorBox>
            <ChangeColorBtn btnText="red" btnClickAct={changeColor}/>
            <ChangeColorBtn btnText="yellow" btnClickAct={changeColor}/>
            <ChangeColorBtn btnText="green" btnClickAct={changeColor}/>
            
        </div>
    )
}