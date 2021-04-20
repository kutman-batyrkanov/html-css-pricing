import { useDispatch } from "react-redux";

const CounterSimpleControls = () => {
  const dispatch = useDispatch();
  function incrementBy1Callback() {
    dispatch({ type: "increment_by_1" });
  }
  function decrementBy1Callback() {
    dispatch({ type: "decrement_by_1" });
  }

  function decrementBy10Callback() {
    dispatch({ type: "decrement_by_10" });
  }  
  function incrementBy10Callback() {
    dispatch({ type: "increment_by_10" });
  }
  function incrementByRandomCallback() {
    dispatch({ type: "increment_by_random" });
  }
  function decrementByRandomCallback() {
    dispatch({ type: "decrement_by_random" });
  }

  return (
    <div>
      <button onClick={incrementBy1Callback}>+1</button>
      <button onClick={decrementBy1Callback}>-1</button>
      <br></br>
      <button onClick={decrementBy10Callback}>-10</button>
      <button onClick={incrementBy10Callback}>+10</button>
      <br></br>
      <button onClick={incrementByRandomCallback}>+random</button>
      <button onClick={decrementByRandomCallback}>-random</button>

    </div>
  );
};
export default CounterSimpleControls;
