import { useEffect, useState, useContext } from "react"
import AnotherRound from './AnotherRound'
import { PlayersContext } from "../App"

const RoundEnded = () => {
  
    const [msg, setMsg] = useState<string>('')
    const playerOne = useContext(PlayersContext).playerOne
    const playerTwo = useContext(PlayersContext).playerTwo
    const setPlayerOne = useContext(PlayersContext).setPlayerOne
    const setPlayerTwo = useContext(PlayersContext).setPlayerTwo
    const api = import.meta.env.VITE_API
    const port = import.meta.env.VITE_PORT

    useEffect(() => {

        const calculateWinner = async (): Promise<void> => {
            try{
                const data = {playerOne: playerOne.move, playerTwo: playerTwo.move}
                const res = await fetch(`${api}:${port}/calculate_winner`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                if(res.ok){
                    const data = await res.json()
                    setMsg(data.msg)
                    if(data.id !== 0){
                        if(data.id === 1)
                            setPlayerOne({...playerOne, score: playerOne.score + 1})
                        else
                            setPlayerTwo({...playerTwo, score: playerTwo.score + 1})
                    }
                }
                else
                    setMsg('An error has occurred. Please try again later.')
            }
            catch{
                setMsg('An error has occurred. Please try again later.')
            }
        }
        
        calculateWinner()

    }, [])
  
    return (
        <div className="round-ended">
            <p className="round-ended-msg">{msg}</p>
            <AnotherRound />
        </div>
    )
}

export default RoundEnded