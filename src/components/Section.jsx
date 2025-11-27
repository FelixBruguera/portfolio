const Section = ({ children, height = "h-dvh", width="w-dvw" }) => {
    return (
        <div className={`${height} ${width} max-w-400 mx-auto px-5`}>
            {children}
        </div>
    )
}

export default Section