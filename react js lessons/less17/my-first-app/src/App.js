import "./App.css";

function Person(props) {
  let smokes = <strong>Ne kurit</strong>;
  if (props.smokes) {
    smokes = <strong>Kurit</strong>;
  }

  return (
    <div className="person">
      <h1>{props.name}</h1>
      <div className="age">{props.age} years old</div>
      <p className="hobby">{props.children}</p>
      <strong>{smokes}</strong>
    </div>
  );
}

// ReactDOM.render(<div></div>, document.querySelector("body"));

function App() {
  return (
    <div className="App">
      <Person name="Elon Musk" age={41}>Listens to <strong>music</strong></Person>
      <Person name="Jeff Besos" age={55} smokes={true} />
      <Person name="Bill Gates" age={56} hobbies={["Singing", "Dancing"]}>Travel</Person>
      <Person name="Stive Jobs" age={58}>Listens to <strong>music</strong></Person>
      <Person name="Chyngyz Aitmatov" age={41}>Listens to <strong>music</strong></Person>
      <Person name="Chuk Palanic" age={41}>Listens to <strong>music</strong></Person>
    </div>
  );
}

export default App;
