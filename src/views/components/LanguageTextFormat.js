const LanguageText = (props) => {
    return (
        <props.tag>
        {
            props.language === 'javascript'
            ? 'JavaScript' : props.language === 'cs'
            ? 'C#' : props.language === 'cplusplus'
            ? 'C++' : props.language.length === 1
            ? props.language.toUpperCase() : props.language[0].toUpperCase() + props.language.slice(1)
        }
        </props.tag>
    )
}

export default LanguageText;