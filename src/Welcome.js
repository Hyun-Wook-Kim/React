import React, { useState } from "react";

function Welcome(){

    const [food, foodChange] = useState(
        {
        first:"",
        second:""
    }
    )

    const {first, second} = food;

    const foodCombi = (e)=>{
        const {name, value} = e.target;
        foodChange({
            ...food,
            [name] : value
        })
    }

    return(
        <>
        <h1>음식을 조합해 봅시다!</h1>
        <input name = "first" placeholder = "첫 음식은?" value = {first} onChange = {foodCombi}/>
        +
        <input name = "second" placeholder = "두 번째 음식은?" value = {second} onChange = {foodCombi}/>
        =
        <div>
            {first}{second}
        </div>
        </>
    )
}

export default Welcome;