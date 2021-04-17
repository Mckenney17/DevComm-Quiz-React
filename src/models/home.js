import { getAllCourses } from '../utils/app-info'

const homeData = {
    devName: localStorage.getItem('dev-name') || 'Dev',
    selectedCourses: JSON.parse(localStorage.getItem('selected-courses')) || [],
    allCourses: getAllCourses()
}

const saveDevName = (devName) => {
    localStorage.setItem('dev-name', devName)
}

const saveSelectedCourses = (selectedCourses) => {
    localStorage.setItem('selected-courses', JSON.stringify(selectedCourses))
}

export default homeData;
export {
    saveDevName,
    saveSelectedCourses,
}