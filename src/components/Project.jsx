import { ExternalLink, GitForkIcon, Github } from "lucide-react"
import Collapsible from "./Collapsible"
import StackItem from "./StackItem"
import Button from "./Button"
import ImageCarousel from "./ImageCarousel"

const Project = ({ data, width = "full" }) => {
    return (
        <div className={`${width === "full" ? "w-full" : "w-1/2 mx-auto"} flex justify-between items-start pb-20 border-t border-t-white/10 pt-5`}>
            <div className={`${width === "full" ? "w-1/2" : "w-1/2 mx-auto"} flex flex-col gap-3`}>
                <div className="flex items-center gap-2">
                    <img src={data.icon} className="size-12"/>
                    <h1 className="text-3xl font-bold">{data.name}</h1>
                </div>
                <p>{data.description}</p>
                <div className="flex items-center gap-2">
                    <a href={data.link} target="_blank"><Button variant="dark"><ExternalLink className="size-4"/></Button></a>
                    <a href={data.repo} target="_blank"><Button><img src="/icons/github.svg" className="size-5"/></Button></a>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-xl font-semibold">Stack</h3>
                    <ul className="flex gap-3">
                        {data.stack.map(item => <StackItem name={item} />)}
                    </ul>
                </div>
                <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-xl font-semibold">Features</h3>
                    <ul className="flex flex-col gap-3 w-8/10">
                        {data.features.map(feature => <Collapsible title={feature.title} content={feature.content} />)}
                    </ul>
                </div>
            </div>
            <ImageCarousel images={data.screenshots}/>
        </div>
    )
}

export default Project