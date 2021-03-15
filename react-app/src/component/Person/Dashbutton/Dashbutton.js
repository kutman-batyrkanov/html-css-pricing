import classes from "./Dashbutton.module.css";

const Dashbutton = ({children}) => {
    return ( <button className={classes.Dashbutton}>{children}</button> );
}
 
export default Dashbutton;