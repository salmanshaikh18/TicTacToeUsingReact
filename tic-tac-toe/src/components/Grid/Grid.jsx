import { useState } from "react"
import Card from "../Cards/Card"
import isWinner from "../../Helpers/checkWinner"

import './Grid.css'

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""))
    const [turn, setTurn] = useState(true); // true --> X, false --> X
    const [winner, setWinner] = useState(null)

    function play(index) {
        if (turn == true) {
            board[index] = "O";
        } else {
            board[index] = "Y";
        }
        const win = isWinner(board, turn ? "O" : "X");
        if (win) {
            setWinner(win);
        }
        setBoard([...board])
        setTurn(!turn)
    }
    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset">Restart Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
           {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)} 
        </div>
        </div>
       
    )
}

export default Grid