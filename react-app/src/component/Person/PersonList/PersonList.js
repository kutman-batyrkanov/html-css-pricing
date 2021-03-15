import classes from "../Person";
import { useState } from "react";
import classes from "./PersonList.module.css";

const PersonList = ({ fast }) => {
    return ( 
    <div className={classes.PersonList}>
        {person.filter(person => <Person {...person} />)}
    </div>
    );
}
 
export default PersonList;