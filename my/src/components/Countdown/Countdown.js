import classes from "./Countdown.module.css";
import { useEffect } from "react";

const Countdown = ({ countdown, setCountdown}) => {
    useEffect(function() {
        if (!countdown) return;

        const interval = setInterval(() => {
            setCountdown(countdown = 1)
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);
    return ( 
    <div className={classes.Countdown}>{countdown}</div>
     );
}
 
export default Countdown;