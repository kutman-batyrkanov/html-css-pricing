import { useState } from "react";
import classes from "./Author.module.css";

const Author = ({ userid }) => {
    const [email, setEmail] = useState("Loading");

    
    return ( 
        <div className = {classes.Author}>
            {userid}
        </div>
    );
}

export default Author;