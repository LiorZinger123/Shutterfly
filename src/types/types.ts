export type Player = {
    id: number,
    move: string,
    score: number
}

export type PlayersContextType = {
    playerOne: Player,
    playerTwo: Player,
    setPlayerOne: React.Dispatch<React.SetStateAction<Player>>,
    setPlayerTwo: React.Dispatch<React.SetStateAction<Player>>
}