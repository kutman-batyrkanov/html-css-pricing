import classes from "./Guitars.module.css";
import guitar from "../../../images/guitar.jpg"
import { Link } from "react-router-dom";

const Guitars = () => {
    return ( 
    <div className={classes.Guitars}>
        <img src={guitar} width="250px" height="250px"  />
        <Link  to="/catalog">Back</Link>
    </div>
     );
}
 
export default Guitars;