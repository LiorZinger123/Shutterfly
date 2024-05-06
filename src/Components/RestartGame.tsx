import React from 'react'

type Props = {
    setPlayerOneMove: React.Dispatch<React.SetStateAction<string>>,
    setPlayerTwoMove: React.Dispatch<React.SetStateAction<string>>,
    setPlayerOneScore: React.Dispatch<React.SetStateAction<number>>,
    setPlayerTwoScore: React.Dispatch<React.SetStateAction<number>>
}

const RestartGame = (props: Props) => {

    const handleClick = (): void => {
        props.setPlayerOneMove('')
        props.setPlayerTwoMove('')
        props.setPlayerOneScore(0)
        props.setPlayerTwoScore(0)
    }

  return (
    <button onClick={handleClick}>Restart Game</button>
  )
}

export default RestartGame