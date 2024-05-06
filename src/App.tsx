import { useState } from 'react'
import './App.css'
import ComputerSide from './ComputerSide'
import UserSide from './UserSide'
import WinnerMsg from './WinnerMsg'
import AnotherRound from './AnotherRound'

function App() {

  const [playerMove, setPlayerMove] = useState<string>('')
  const [playerScore, setPlayerScore] = useState<number>(0)
  const [pcMove, setPcMove] = useState<string>('')
  const [pcScore, setPcScore] = useState<number>(0)

  return (
    <>
      <h1>Welcome To The Game</h1>

      <div className='sides'>
        <UserSide playerMove={playerMove} setPlayerMove={setPlayerMove} playerScore={playerScore} />
        <ComputerSide playerMove={playerMove} pcMove={pcMove} setPcMove={setPcMove} pcScore={pcScore} />
      </div>

      <div className='bottom'>
        <WinnerMsg playerMove={playerMove} pcMove={pcMove} setPlayerScore={setPlayerScore} setPcScore={setPcScore} />
        {pcMove !== '' && <AnotherRound setPlayerMove={setPlayerMove} setPcMove={setPcMove} />}
      </div>
    </>
  )
}

export default App
