import Button from "./Button"

const StackItem = ({ name }) => {
    return (
        <li>
            <Button>
                <img src={`icons/${name}.svg`} className="size-6"/>
                <p className="text-sm font">{name}</p>
            </Button>
        </li>
    )
}

export default StackItem