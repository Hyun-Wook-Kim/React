import React, {useState, useRef} from "react";

function ColorAdd(){

    const [originColor, newColor] = useState('')


    
    let a;
    const colorInput = (e)=>{
        a = e.target.value;
        console.log(a)
        
    }
    
    const colorChange = (e)=>{
        console.log(a)
        newColor(a)
    }

    return(
        <>
        <h1 style = {{color : originColor}}>영어로 색깔 맞추기!</h1>
        <p>영어로 색깔을 올바르게 치면 글자의 색이 바뀌어요! (소문자, 웹 컬러만 가능)</p>
        <input onChange = {colorInput}></input>
        <button onClick = {colorChange}>색으로 변경하기!</button>
        </>
    )
}

export default ColorAdd;
