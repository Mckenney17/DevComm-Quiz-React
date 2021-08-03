import BeginnerQuizzes from './questions/beginner.json'
import IntermediateQuizzes from './questions/intermediate.json'
import AdvanceQuizzes from './questions/advance.json'
import { CustomMap } from './quick-funcs'

const QuestionObjectListFetcher = {
    beginner: BeginnerQuizzes,
    intermediate: IntermediateQuizzes,
    advance: AdvanceQuizzes,
    getList(...levels) {
        return levels.reduce((list, level) => {
            list.push(...this[level])
            return list
        }, [])
    }
}

const QuizData = new CustomMap();

class QuizEngine {
    static getAllQuizLanguages() {
        return [...new Set(QuestionObjectListFetcher
            .getList('beginner', 'intermediate', 'advance')
            .map((obj) => obj.language))];
    }

    static getTotalQuestionsInLevel(language, level) {
        return QuestionObjectListFetcher
        .getList(level)
        .filter((obj) => obj.language === language).length;
    }

    static setLevelCompletion(language, level, completion) {
        QuizData.set('level-completion', new CustomMap())
        .set(language, new CustomMap()).set(level, completion)
    }

    static getLevelCompletion(language, level) {
        return QuizData?.get('level-completion')?.get(language)?.get(level) || 0;
    }
}

export default QuizEngine
