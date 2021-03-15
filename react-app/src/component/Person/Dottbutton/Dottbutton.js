import classes from "./Dottbutton.module.css";

const Dottbutton = ({children}) => {
    return ( <button className={classes.Dottbutton}>{children}</button> );
}
 
export default Dottbutton;