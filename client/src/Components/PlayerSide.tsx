import React, { useState } from "react"
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { Player } from "../types/types";

type Props = {
    player: Player,
    setPlayer: React.Dispatch<React.SetStateAction<Player>>
}

const PlayerSide = (props: Props) => {

    const icons = { 'rock': <FaRegHandRock className="icon" />, 'paper': <FaRegHandPaper className="icon" />, 'scissors': <FaRegHandScissors className="icon" /> }
    const [chosenIcon, setChosenIcon] = useState<JSX.Element | null>(null)

    const setMove = (move: string): void => {
        if(props.player.move === ''){
            props.setPlayer({...props.player, move: move})
            setChosenIcon(icons[move as keyof typeof icons])
        }
    }

  return (
    <div>
        <h1 className="player-title">PLAYER {props.player.id}</h1>
        <h2>Score: {props.player.score}</h2>
        {props.player.move === '' ?
            <ul>
                <li><FaRegHandRock className="icon pointer-icon" onClick={() => setMove('rock')} /></li>
                <li><FaRegHandPaper className="icon pointer-icon" onClick={() => setMove('paper')} /></li>
                <li><FaRegHandScissors className="icon pointer-icon" onClick={() => setMove('scissors')} /></li>
            </ul>
            : <p>{chosenIcon}</p>
        }
    </div>
  )
}

export default PlayerSide