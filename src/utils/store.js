const saveDevName = (devName) => {
    localStorage.setItem('dev-name', devName)
}

const getDevName = () => localStorage.getItem('dev-name') || 'Dev';

let selectedCourses = null;
const addToSelectedCourses = (course) => {
    if (!selectedCourses) selectedCourses = getSelectedCourses();
    if (!selectedCourses.includes(course)) selectedCourses.push(course);
    localStorage.setItem('selected-courses', JSON.stringify(selectedCourses))
}
const removeFromSelectedCourses = (course) => {
    if (!selectedCourses) selectedCourses = getSelectedCourses();
    selectedCourses.splice(selectedCourses.indexOf(course), 1);
    localStorage.setItem('selected-courses', JSON.stringify(selectedCourses))
}

const getSelectedCourses = () => JSON.parse(localStorage.getItem('selected-courses')) || [];

const courseSelected = (course) => {
    if (!selectedCourses) selectedCourses = getSelectedCourses();
    return selectedCourses.includes(course);
}

export {
    saveDevName,
    addToSelectedCourses,
    removeFromSelectedCourses,
    courseSelected,
    getDevName,
    getSelectedCourses,
}