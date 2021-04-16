import classes from "./Piano.module.css";
import piano1 from "../../../images/piano1.jpg"
import { Link } from "react-router-dom";

const Piano = () => {
    return ( 
    <div className={classes.Piano}>
        <img src={piano1} width="250px" height="250px" />
        <Link to="/catalog">Back</Link>
    </div>
     );
}
 
export default Piano;