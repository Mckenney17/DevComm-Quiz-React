import LanguageCheckBox from './Language-checkbox'

const AllCoursesModal = (props) => {
    const languageCheckBoxes = props.languages.map((language) => <LanguageCheckBox key={language} language={language} />)
    return (
        <div className="all-courses-modal">
            <p>Select Language(s)</p>
            <div className="avail-langs">
                {languageCheckBoxes}
            </div>
            <button onClick={props.hideModal} className="langs-chosen-save">Save</button>
        </div>
    )
}

export default AllCoursesModal