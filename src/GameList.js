import React from 'react';


function Game({game}){
return(
    <div>
        <b>{game.gamename}</b> <span>{game.year}</span>
    </div>
)
}


function GameList({games}){


    return(
        <>
        {games.map(game =>(
            <Game game = {game} key = {game.id}></Game>
        ))}
        </>

    )

}

export default GameList;