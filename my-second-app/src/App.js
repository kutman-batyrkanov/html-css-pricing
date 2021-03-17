import { useState } from "react";
import PersonList from './components/Person/PersonList';
import Filter from './components/Person/Filter';

function App() {
    const person = [
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
    const [filterCommits, setfilterCommits] = useState(false);
  
  return (
    <div className="App">
      <Filter state={filterStudents} change={setFilterStudents}></Filter>
      <Filter state={filterWpm} change={setFilterWpm}></Filter>
      <Filter state={filterCommits} change={setfilterCommits}></Filter>
      <PersonList 
      person={person}
      filterStudents={filterStudents}
      filterWpm={filterWpm}
      filterCommits={filterCommits} />
      
    </div>
  );
}

export default App;
