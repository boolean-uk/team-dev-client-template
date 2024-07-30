const Form = ({ children, onSubmit, className }) => {
    const onFormSubmit = (event) => {
        event.preventDefault()
        onSubmit()
    }

    return (
        <form className={className} onSubmit={onFormSubmit}>
            {children}
        </form>
    )
}

export default Form