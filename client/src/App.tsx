import { useState, createContext } from 'react'
import { Player, PlayersContextType } from './types/types'
import PlayerSide from './Components/PlayerSide'
import RoundEnded from './Components/RoundEnded'
import RestartGame from './Components/RestartGame'
import './App.css'

export const PlayersContext = createContext<PlayersContextType>(null!) 

function App() {

  const [playerOne, setPlayerOne] = useState<Player>({ id: 1, move: '', score: 0 })
  const [playerTwo, setPlayerTwo] = useState<Player>({ id: 2, move: '', score: 0 })
  const roundEnded = playerOne.move !== '' && playerTwo.move !== '' ? true : false

  return (
    <PlayersContext.Provider value={{playerOne: playerOne, playerTwo: playerTwo, setPlayerOne: setPlayerOne, setPlayerTwo: setPlayerTwo}}>
      
      <h1 className='title'>Welcome To The Game</h1>

      <div className='players'>
        <PlayerSide player={playerOne} setPlayer={setPlayerOne} />
        <PlayerSide player={playerTwo} setPlayer={setPlayerTwo} />
      </div>

      {roundEnded && <RoundEnded />}

      <RestartGame />

    </PlayersContext.Provider>
  )
}

export default App