import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const Collapsible = ({ title, content }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`flex w-full ${open ? "items-start h-fit" : "items-center h-12"} justify-between border border-white/10 p-2 rounded-lg shadow-sm hover:bg-white/3 transition-colors height-transition`}>
            <div className="flex flex-col gap-2">
                <h3 className="text-base">{title}</h3>
                {open && <p className="text-white/70 text-transition">{content}</p>}
            </div>
            <button onClick={() => setOpen(prev => !prev)} className="hover:cursor-pointer">
                {open ? <ChevronUp /> : <ChevronDown />}
            </button>
        </div>

    )
}

export default Collapsible