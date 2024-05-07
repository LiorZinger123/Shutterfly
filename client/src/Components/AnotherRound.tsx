import { useContext } from "react"
import { PlayersContext } from "../App"

const AnotherRound = () => {
    
    const playerOne = useContext(PlayersContext).playerOne
    const playerTwo = useContext(PlayersContext).playerTwo
    const setPlayerOne = useContext(PlayersContext).setPlayerOne
    const setPlayerTwo = useContext(PlayersContext).setPlayerTwo

    const handleClick = (): void => {
        setPlayerOne({...playerOne, move: ''})
        setPlayerTwo({...playerTwo, move: ''})
    }
  
    return (
    <button onClick={handleClick}>Play again</button>
  )
}

export default AnotherRound