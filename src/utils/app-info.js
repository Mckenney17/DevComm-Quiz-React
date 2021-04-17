import beginnerQs from './questionStorage/beginnerQs'
import intermediateQs from './questionStorage/beginnerQs'
import advancedQs from './questionStorage/beginnerQs'
import ninjaQs from './questionStorage/beginnerQs'

const questions = {
    beginner: beginnerQs(),
    intermediate: intermediateQs(),
    advanced: advancedQs(),
    ninja: ninjaQs(),
};

/* const getQuizStructure = () => getAvailableLanguages()
.reduce((quizStructure, languageChoice) => {
    setLanguageChoice(quizStructure, languageChoice);
    setLevelsAndModules(quizStructure, languageChoice);
    return quizStructure;
}, new Map()); */

const getAllCourses = () => [...new Set(Object
.values(questions)
.map((questionsList) => questionsList
    .map((questionObject) => questionObject.language))
.flat())];

export {
    getAllCourses,
}