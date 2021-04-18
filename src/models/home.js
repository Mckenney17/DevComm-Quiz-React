import { getAllCourses } from '../utils/app-info'
import { getDevName, getSelectedCourses } from '../utils/store';

const homeData = {
    getDevName,
    getSelectedCourses,
    allCourses: getAllCourses()
}

export default homeData;
