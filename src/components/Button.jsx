const Button = ({ children, variant, onClick }) => {
    return (
        <button onClick={onClick ? () => onClick() : null} className={`flex items-center gap-2 p-2 border w-fit border-white/10 rounded-lg hover:bg-white/5 hover:cursor-pointer shadow-sm transition-colors ${variant === "dark" && "bg-blue-600 text-white hover:bg-blue-800!"}`}>
            {children}
        </button>
    )
}

export default Button