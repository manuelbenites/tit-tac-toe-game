import React from "react"

interface ButtonProps {
	index: number
	children: React.ReactNode
	updateBoard: (index: number) => void
}

const Button: React.FC<ButtonProps> = ({ index, children, updateBoard }) => {
	const handleClickButton = () => {
		updateBoard(index)
	}
	return (
		<div
			onClick={handleClickButton}
			className="h-24 w-24 outline-none cursor-pointer flex justify-center items-center bg-[#1F3641] shadow-xl rounded-xl"
		>
			{children}
		</div>
	)
}

export default Button
