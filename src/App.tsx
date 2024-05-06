import { useState } from 'react'
import UserSide from './Components/UserSide'
import WinnerMsg from './Components/WinnerMsg'
import AnotherRound from './Components/AnotherRound'
import RestartGame from './Components/RestartGame'
import './App.css'

function App() {

  const [playerOneMove, setPlayerOneMove] = useState<string>('')
  const [playerOneScore, setPlayerOneScore] = useState<number>(0)
  const [playerTwoMove, setPlayerTwoMove] = useState<string>('')
  const [playerTwoScore, setPlayerTwoScore] = useState<number>(0)

  return (
    <>
      <h1 className='title'>Welcome To The Game</h1>

      <div className='sides'>
        <UserSide playerMove={playerOneMove} setPlayerMove={setPlayerOneMove} playerScore={playerOneScore} playerNumber={1} />
        <UserSide playerMove={playerTwoMove} setPlayerMove={setPlayerTwoMove} playerScore={playerTwoScore} playerNumber={2} />
      </div>

      {playerOneMove !== '' && playerTwoMove !== '' &&
        <div className='bottom'>
          <WinnerMsg playerOneMove={playerOneMove} playerTwoMove={playerTwoMove} playerOneScore={playerOneScore}
            playerTwoScore={playerTwoScore} setPlayerOneScore={setPlayerOneScore} setPlayerTwoScore={setPlayerTwoScore} />
          <AnotherRound setPlayerOneMove={setPlayerOneMove} setPlayerTwoMove={setPlayerTwoMove} />
        </div>
      }

      <RestartGame setPlayerOneMove={setPlayerOneMove} setPlayerTwoMove={setPlayerTwoMove} setPlayerOneScore={setPlayerOneScore}
        setPlayerTwoScore={setPlayerTwoScore} />
    </>
  )
}

export default App