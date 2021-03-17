import classes from "./Filter.module.css";

const Filter = ({ state, change, children }) => {
  return (
    <div className={classes.Filter}>
      <label>
        <input type="checkbox" checked={!state} onChange={change}>
          {children}
        </input>
      </label>
    </div>
  );
};

export default Filter;
