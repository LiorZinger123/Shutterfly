import { Request, Response } from "express";

export const calculateWinner = (req: Request, res: Response): void => {
    const playerOne = req.body.playerOne
    const playerTwo = req.body.playerTwo
    if(!checkIfValidValues(playerOne, playerTwo))
        res.sendStatus(400)
    else{
        if(playerOne === playerTwo)
            res.send({ id: 0, msg: 'Draw!' })
        else{
            const winnerMove = calculateMove([playerOne, playerTwo])
            if(playerOne === winnerMove)
                res.send({ id: 1, msg: 'Player 1 won!' })
            else
                res.send({ id: 2, msg: 'Player 2 won!' })
        }
    }
}

const checkIfValidValues = (playerOne: any, playerTwo: any): boolean => {
    const options = ['rock', 'paper', 'scissors']
    if(!options.includes(playerOne) || !options.includes(playerTwo))
        return false
    return true
}

const calculateMove = (moves: string[]): string => {
    if(moves.includes('rock') && moves.includes('paper'))
        return 'paper'
    else if(moves.includes('rock') && moves.includes('scissors'))
        return 'rock'
    else 
        return 'scissors'
}