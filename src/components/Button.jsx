const Button = ({ children, variant, onClick }) => {
    return (
        <button onClick={onClick ? () => onClick() : null} className={`flex items-center gap-2 p-2 border w-fit border-black/15 rounded-lg hover:bg-black/3 hover:cursor-pointer transition-colors ${variant === "dark" && "bg-blue-800 text-white hover:bg-blue-950"}`}>
            {children}
        </button>
    )
}

export default Button