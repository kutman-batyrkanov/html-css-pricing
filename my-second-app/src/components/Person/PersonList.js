import classes from "./PersonList.module.css";
import Person from "./Person"

const PersonList = ({ person, filterStudents, filterWpm, filterCommits,}) => {

  let students = person;
  if (filterStudents) {
    students = person.filter(person => person.role == "Students");
  }
  let wpm = students;
  if (filterWpm) {
    wpm = students.filter(person => person.wpm > 34);
  }
  let commits = wpm;
  if (filterCommits) {
    commits = students.filter(person => person.commits > 1000);
  }
    return ( 
    <div className={classes.PersonList}>
        {commits.map(per => <Person {...per}/>)}
    </div> );
}
 
export default PersonList;