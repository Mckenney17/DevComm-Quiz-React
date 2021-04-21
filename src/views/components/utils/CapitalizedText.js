const CapitalizedText = (props) => {
    const { text } = props;
    return text[0].toUpperCase() + text.slice(1);
}

export default CapitalizedText