import React from 'react';

function CreateGame({gamename, year, onChange, onCreate}){
    return(
        <div>
            <input name = "gamename" placeholder = "게임 이름" value = {gamename} onChange = {onChange}/>
            <input name = "year" placeholder = "출시 년도" value = {year} onChange={onChange}/>
            <button onClick = {onCreate}>게임등록</button>
        </div>
    )
}

export default CreateGame;