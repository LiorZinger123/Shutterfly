import React, { useState } from "react"
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";

type Props = {
    playerMove: string,
    setPlayerMove: React.Dispatch<React.SetStateAction<string>>,
    playerScore: number,
    playerNumber: number
}

const UserSide = (props: Props) => {

    const icons = { 'rock': <FaRegHandRock className="icon" />, 'paper': <FaRegHandPaper className="icon" />, 'scissors': <FaRegHandScissors className="icon" /> }
    const [chosenIcon, setChosenIcon] = useState<JSX.Element | null>(null)

    const setMove = (move: string): void => {
        if(props.playerMove === ''){
            props.setPlayerMove(move)
            setChosenIcon(icons[move as keyof typeof icons])
        }
    }

  return (
    <div>
        <h1 className="player-title">PLAYER {props.playerNumber}</h1>
        <h2>Score: {props.playerScore}</h2>
        {props.playerMove === '' ?
            <ul>
                <li><FaRegHandRock className="icon" onClick={() => setMove('rock')} /></li>
                <li><FaRegHandPaper className="icon" onClick={() => setMove('paper')} /></li>
                <li><FaRegHandScissors className="icon" onClick={() => setMove('scissors')} /></li>
            </ul>
            : <p>{chosenIcon}</p>
        }
    </div>
  )
}

export default UserSide