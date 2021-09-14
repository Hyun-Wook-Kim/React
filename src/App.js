import React, {useRef, useState} from 'react';
import CreateGame from './CreateGame';

import GameList from './GameList'

function App() {

  const [inputs, setInputs] = useState({
    gamename : '',
    year : ''
  });

  const {gamename, year} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  }


  const [games, setGames] = useState([
    {
      id:1,
      gamename:'Bag',
      year : '2012'
  },
  {
      id:2,
      gamename:'LOL',
      year : '2016'
  },
  {
      id:3,
      gamename:'LostArk',
      year : '2018'
  }
  ]);



  const nextId = useRef(4);


  const onCreate = ()=>{
    const newGame = {
      id:nextId.current,
      gamename,
      year
    };

    setGames([...games, newGame]);

    setInputs({
      gamename:'',
      year:''
    }) 
    nextId.current += 1
  };

  return(
    <>
    
    <CreateGame gamename = {gamename} year = {year} onChange = {onChange} onCreate = {onCreate}/>
    <GameList games = {games}></GameList>

    </>

  )
}

export default App;
