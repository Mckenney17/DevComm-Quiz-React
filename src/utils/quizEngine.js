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

const QuizData = () => localStorage?.getItem('quiz-data') ? new CustomMap(JSON.parse(localStorage.getItem('quiz-data'))) : new CustomMap();

const chunkIntoModules = (language, level) => {
    const questions = QuizEngine.getQuestionsInLevel(language, level)
    return questions.reduce((modules, question) => {
        if (!Object.keys(modules).length) {
            modules['Module 01'] = []
        }
        const lastModuleKey = Object.keys(modules).pop();
        const lastModule = modules[lastModuleKey];
        if (lastModule.length < 10) lastModule.push(question)
        else {
            // set the next module
            const moduleNum = parseInt(lastModuleKey.slice(lastModuleKey.indexOf(' ') + 1))
            modules[`Module ${(moduleNum + 1).toLocaleString(undefined, { minimumIntegerDigits: 2 })}`] = []
        }
        return modules
    }, {});
}
class QuizEngine {
    static getAllQuizLanguages() {
        return [...new Set(QuestionObjectListFetcher
            .getList('beginner', 'intermediate', 'advance')
            .map((obj) => obj.language))];
    }

    static getQuestionsInLevel(language, level) {
        return QuestionObjectListFetcher
        .getList(level)
        .filter((obj) => obj.language === language)
    }

    static getTotalQuestionsInLevel(language, level) {
        return QuizEngine.getQuestionsInLevel(language, level).length;
    }

    static getLevelModuleKeys(language, level) {
        return Object.keys(chunkIntoModules(language, level))
    }
    
    static getLevelModuleQuestions({ language, level, module }) {
        return chunkIntoModules(language, level)[module]
    }

    static setLevelCompletion({ language, level, completion }) {
        QuizData().autoSetGetSetSave({ keys:['level-completions', language], lastPair:[level, completion], storage: 'quiz-data' })
    }

    static getLevelCompletion(language, level) {
        return QuizData().composeGet('level-completions', language, level) || 0
    }

    static setModuleScore({ language, level, module, score }) {
        QuizData().autoSetGetSetSave({ keys:['module-scores', language, level], lastPair:[module, score], storage: 'quiz-data' })
    }

    static getModuleScore({ language, level, module }) {
        return QuizData().composeGet('module-scores', language, level, module) || 0
    }
}

export default QuizEngine
