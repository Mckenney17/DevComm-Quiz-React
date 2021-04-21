const LanguageText = (props) => {
    return (
        props.language === 'javascript'
        ? 'JavaScript' : props.language === 'cs'
        ? 'C#' : props.language === 'cplusplus'
        ? 'C++' : props.language.length === 1
        ? props.language.toUpperCase() : props.language[0].toUpperCase() + props.language.slice(1)
    )
}

export default LanguageText;