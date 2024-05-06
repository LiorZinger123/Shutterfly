import React from "react"

type Props = {
    setPlayerMove: React.Dispatch<React.SetStateAction<string>>,
    setPcMove: React.Dispatch<React.SetStateAction<string>>
}

const AnotherRound = (props: Props) => {
    
    const handleClick = (): void => {
        props.setPlayerMove('')
        props.setPcMove('')
    }
  
    return (
    <button onClick={handleClick}>Another Round</button>
  )
}

export default AnotherRound