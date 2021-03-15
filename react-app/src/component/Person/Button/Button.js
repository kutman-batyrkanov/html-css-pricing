import classes from "./Button.module.css";

const Button = ({children}) => {
    return ( <button className={classes.Button}>{children}</button> );
}
 
export default Button;