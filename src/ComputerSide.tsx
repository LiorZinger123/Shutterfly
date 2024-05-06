import React, { useEffect, useState } from "react"
import { FaRegHandRock } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { FaRegHandScissors } from "react-icons/fa";

type Props = {
    playerMove: string,
    pcMove: string,
    setPcMove: React.Dispatch<React.SetStateAction<string>>,
    pcScore: number
}

const ComputerSide = (props: Props) => {
    
    const options = ['rock', 'paper', 'scissors']
    const icons = { 'rock': <FaRegHandRock className="icon" />, 'paper': <FaRegHandPaper className="icon" />, 'scissors': <FaRegHandScissors className="icon" /> }
    const [chosenIcon, setChosenIcon] = useState<JSX.Element | null>(null)

    useEffect(() => {

        if(props.playerMove !== ''){
            const randomPcMove = options[Math.floor(Math.random() * 3)]
            props.setPcMove(randomPcMove)
            const icon = icons[randomPcMove as keyof typeof icons]
            setChosenIcon(icon)
        }

    }, [props.playerMove])
 
    return (
    <div>
        <h1>PC {props.pcScore}</h1>
        {props.pcMove !== ''
            ? <p>{chosenIcon}</p>
            : null
        }
    </div>
  )
}

export default ComputerSide