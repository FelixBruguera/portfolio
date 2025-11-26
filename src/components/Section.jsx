const Section = ({ children, height = "h-dvh" }) => {
    return (
        <div className={`${height} w-dvw max-w-400 mx-auto px-5`}>
            {children}
        </div>
    )
}

export default Section