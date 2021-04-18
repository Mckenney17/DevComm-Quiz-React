import { getAllCourses } from '../utils/app-info'

const homeData = {
    devName: localStorage.getItem('dev-name') || 'Dev',
    selectedCourses: JSON.parse(localStorage.getItem('selected-courses')) || [],
    allCourses: getAllCourses()
}

export default homeData;
