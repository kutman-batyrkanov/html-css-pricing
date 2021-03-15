import { useState } from "react";
import PersonList from "./component/Person/PersonList/PersonList";

function App() {
  const persons = [
    { name: "Elaman", role: "Teacher", wpm: 10, commits: 100 },
    { name: "Choro", role: "Assistant", wpm: 78, commits: 10401 },
    { name: "Tynchtyk", role: "Teacher", wpm: 102, commits: 0 },
    { name: "Danila", role: "Student", wpm: -5, commits: 1244 },
    { name: "Madina", role: "Student", wpm: 30, commits: 5000 },
    { name: "Tatyna", role: "Student", wpm: 27, commits: 572541 },
    { name: "Emirlan", role: "Student", wpm: 20, commits: 56566 },
    { name: "Baitemir", role: "Student", wpm: 35, commits: 556 },
    { name: "Yntymak", role: "Student", wpm: 40, commits: 55 },
    { name: "Tamara", role: "Student", wpm: 32, commits: 999 },
    { name: "Nurkyz", role: "Student", wpm: 39, commits: 26 },
    { name: "Kunduz", role: "Student", wpm: 38, commits: 99 },
    { name: "Adis", role: "Student", wpm: 39, commits: 56 },
    { name: "Islam", role: "Student", wpm: 20, commits: 25 },
    { name: "Felix", role: "Student", wpm: 25, commits: 99 },
    { name: "Erjan", role: "Student", wpm: 19, commits: 9959 },
    { name: "Ermek", role: "Student", wpm: 28, commits: 6655 },
    { name: "Aiymkyz", role: "Student", wpm: 37, commits: 226 },
    { name: "Keremet", role: "Student", wpm: 41, commits: 999 },
    { name: "Karlygach", role: "Student", wpm: 25, commits: 66 },
    { name: "Keremet", role: "Student", wpm: 32, commits: 52 },
    { name: "Kutman", role: "Student", wpm: 33, commits: 99 },
    { name: "Chyngyz", role: "Student", wpm: 36, commits: 559 },
  ];

  const [filterStudents, setFilterStudents] = useState(false);
  const [filterWpm, setFilterWpm] = useState(false);

// DLinnyi
  let students = person;
  if (filterStudents) {
    students = person.filter(person => person.role == "Students");
  }

  let wpm = person;
  if (filterWpm) {
    wpm = person.filter(person => person.wpm  > 34);
  }
  // Korotkiy
  // const students = person.filter(person => !filterStudents || person.role == "Students");
  const fast = students.filter(person => !filterWpm || person.wpm > 34)


  return (
    <div className="App">
      <div>
        <label>
          <input
           type="checkbox"
           checked={filterStudents} 
           onChange={() => setFilterStudents(!filterStudents)}>Only Students</input>
        </label>
      </div>
      <div>
        <label>
          <input
           type="checkbox"
           checked={filterWpm} 
           onChange={() => setFilterWpm(!filterWpm)}> 35 Wpm</input>
        </label>
      </div>
      <PersonList persons={fast} />
    </div>
  );
}
export default App;