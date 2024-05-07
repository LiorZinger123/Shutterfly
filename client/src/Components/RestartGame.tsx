import { useContext } from "react"
import { PlayersContext } from "../App"

const RestartGame = () => {

    const playerOne = useContext(PlayersContext).playerOne
    const playerTwo = useContext(PlayersContext).playerTwo
    const setPlayerOne = useContext(PlayersContext).setPlayerOne
    const setPlayerTwo = useContext(PlayersContext).setPlayerTwo

    const handleClick = (): void => {
        setPlayerOne({...playerOne, move: '', score: 0})
        setPlayerTwo({...playerTwo, move: '', score: 0})
    }

  return (
    <button onClick={handleClick}>Restart Game</button>
  )
}

export default RestartGame