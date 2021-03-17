import classes from "../Person/Person";
import classes from "./PersonList.module.css";

const PersonList = ({ person }) => {
    return ( 
    <div className={classes.PersonList}>
        {person.filter(person => <Person {...person} />)}
    </div>
    );
}
 
export default PersonList;