import BeginnerQuizzes from './questions/beginner.json'
import IntermediateQuizzes from './questions/intermediate.json'
import AdvanceQuizzes from './questions/advance.json'

const QuizObjectsArray = [...BeginnerQuizzes, ...IntermediateQuizzes, ...AdvanceQuizzes]

class QuizEngine {
    static getAllQuizLanguages() {
        return [...new Set(QuizObjectsArray.map((obj) => obj.language))];
    }
}

export default QuizEngine
