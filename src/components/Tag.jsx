const Tag = ({ children, isActive, onClick}) => {
    return (
        <button onClick={onClick} className={`flex items-center shrink-0 gap-1 text-xs border border-stone-700 p-2 rounded-sm transition-colors ${isActive ? "bg-blue-900" : "hover:cursor-pointer hover:bg-stone-900"}`}>{children}</button>
    )
}

export default Tag