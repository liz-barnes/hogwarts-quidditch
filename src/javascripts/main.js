import studentData from '../data/studentData';
import studentList from './components/studentList';

import '../styles/main.scss';

const init = () => {
  studentList.createStudentList(studentData.getStudents());
};

init();
