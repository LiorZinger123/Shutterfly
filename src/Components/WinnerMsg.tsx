import React, { useEffect, useState } from "react"

type Props = {
    playerOneMove: string,
    playerTwoMove: string,
    playerOneScore: number, 
    playerTwoScore: number,
    setPlayerOneScore: React.Dispatch<React.SetStateAction<number>>,
    setPlayerTwoScore: React.Dispatch<React.SetStateAction<number>>
}

const WinnerMsg = (props: Props) => {
  
    const [winningMsg, setWinningMsg] = useState<string>('')

    useEffect(() => {

        const calculateWinner = (options: string[]): string => {
            if(options.includes('rock') && options.includes('paper'))
                return 'paper'
            else if(options.includes('rock') && options.includes('scissors'))
                return 'rock'
            else 
                return 'scissors'
        }

        if(props.playerOneMove === props.playerTwoMove)
            setWinningMsg('Draw')
        else{
            const winnerOption = calculateWinner([props.playerOneMove, props.playerTwoMove])
            if(props.playerOneMove === winnerOption){
                setWinningMsg('Player 1 Won')
                props.setPlayerOneScore(props.playerOneScore + 1)
            }
            else{
                setWinningMsg('Player 2 won')
                props.setPlayerTwoScore(props.playerTwoScore + 1)
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