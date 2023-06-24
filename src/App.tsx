import React, { useState } from "react"
import IconCircle from "/assets/icon-o.svg"
import IconSpan from "/assets/icon-x.svg"
import Button from "./components/Button"

const PLAYER_TURNS = {
	X: <img className="w-10" src={IconSpan} />,
	O: <img className="w-10" src={IconCircle} />,
}

const App: React.FC = () => {
	const [board, setBoard] = useState(Array(9).fill(""))
	const [turn, setTurn] = useState(PLAYER_TURNS.X)
	const updateBoard = (index: number) => {
		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)
		const newTurn = turn === PLAYER_TURNS.O ? PLAYER_TURNS.X : PLAYER_TURNS.O
		setTurn(newTurn)
	}
	return (
		<main className="h-screen bg-[#1A2A33] flex flex-col text-white justify-center items-center">
			<section className="flex items-center">
				<div>
					{turn === PLAYER_TURNS.X ? (
						<img src={IconSpan} />
					) : (
						<img src={IconCircle} />
					)}
				</div>
				<span>Turn</span>
			</section>
			<section className="grid grid-cols-3 gap-6">
				{board.map((_item, index) => (
					<Button key={index} index={index} updateBoard={updateBoard}>
						{board[index]}
					</Button>
				))}
			</section>
		</main>
	)
}

export default App
