import React, { useState } from "react"
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";

type Props = {
    playerMove: string,
    setPlayerMove: React.Dispatch<React.SetStateAction<string>>,
    playerScore: number
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
        <h1>PLAYER {props.playerScore}</h1>
        {props.playerMove === '' ?
            <>
                <p>Please choose your move</p>
                <ul>
                    <li onClick={() => setMove('rock')}><FaRegHandRock className="icon" /></li>
                    <li onClick={() => setMove('paper')}><FaRegHandPaper className="icon" /></li>
                    <li onClick={() => setMove('scissors')}><FaRegHandScissors className="icon" /></li>
                </ul>
            </> 
            : <p>{chosenIcon}</p>
        }
    </div>
  )
}

export default UserSide