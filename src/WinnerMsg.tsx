import React, { useEffect, useState } from "react"

type Props = {
    playerMove: string,
    pcMove: string,
    setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
    setPcScore: React.Dispatch<React.SetStateAction<number>>
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

        if(props.pcMove !== ''){
            if(props.playerMove === props.pcMove)
                setWinningMsg('Draw!')
            else{
                const winnerOption = calculateWinner([props.playerMove, props.pcMove])
                if(props.playerMove === winnerOption){
                    setWinningMsg('Player Won!')
                    props.setPlayerScore(s => s + 1)
                }
                else{
                    setWinningMsg('PC won!')
                    props.setPcScore(s => s + 1)
                }
            }
        }

    }, [props.pcMove])
  
    return (
    <p className="winner-msg">
        {props.pcMove != '' && winningMsg}
    </p>
  )
}

export default WinnerMsg