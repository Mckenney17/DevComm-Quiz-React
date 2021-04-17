const LanguageText = (props) => {
    const elem = document.createElement(props.tag);
    switch (props.language) {
        case 'javascript':
            elem.textContent = 'JavaScript';
            break;
        case 'cs':
            elem.textContent = 'C#';
            break;
        case 'cplusplus':
            elem.textContent = 'C++';
            break;
        default:
            if (props.language.length === 1) elem.textContent = props.language.toUpperCase();
            else elem.textContent = props.language[0].toUpperCase() + props.language.slice(1);
            break;
    }

    return elem;
}

export default LanguageText;