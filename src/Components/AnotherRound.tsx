import React from "react"

type Props = {
    setPlayerOneMove: React.Dispatch<React.SetStateAction<string>>,
    setPlayerTwoMove: React.Dispatch<React.SetStateAction<string>>
}

const AnotherRound = (props: Props) => {
    
    const handleClick = (): void => {
        props.setPlayerOneMove('')
        props.setPlayerTwoMove('')
    }
  
    return (
    <button onClick={handleClick}>Play again</button>
  )
}

export default AnotherRound