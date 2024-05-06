import { useEffect, useState, useContext } from "react"
import { PlayersContext } from "../App"

const WinnerMsg = () => {
  
    const [winningMsg, setWinningMsg] = useState<string>('')
    const playerOne = useContext(PlayersContext).playerOne
    const playerTwo = useContext(PlayersContext).playerTwo
    const setPlayerOne = useContext(PlayersContext).setPlayerOne
    const setPlayerTwo = useContext(PlayersContext).setPlayerTwo

    useEffect(() => {

        const calculateWinner = (options: string[]): string => {
            if(options.includes('rock') && options.includes('paper'))
                return 'paper'
            else if(options.includes('rock') && options.includes('scissors'))
                return 'rock'
            else 
                return 'scissors'
        }

        if(playerOne.move === playerTwo.move)
            setWinningMsg('Draw')
        else{
            const winnerOption = calculateWinner([playerOne.move, playerTwo.move])
            if(playerOne.move === winnerOption){
                setWinningMsg('Player 1 Won')
                setPlayerOne({...playerOne, score: playerOne.score + 1})
            }
            else{
                setWinningMsg('Player 2 won')
                setPlayerTwo({...playerTwo, score: playerTwo.score + 1})
            }
        }

    }, [])
  
    return (
    <p className="winner-msg">
        {winningMsg}!
    </p>
  )
}

export default WinnerMsg