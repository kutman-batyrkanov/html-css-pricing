import classes from "./Catalog.module.css";
import guitar from "../../images/guitar.jpg";
import { Link } from "react-router-dom";
import piano1 from "../../images/piano1.jpg"
import electricguitar from "../../images/electricguitar.jpg"
import microfon from "../../images/microfon.jpg"
import usiliteli from "../../images/usiliteli.jpg"
import acuisticsistems from "../../images/acuisticsistems.jpg"

const Catalog = () => {
  return (
    <div className={classes.Catalog}>
      <div
        className={classes.guitars}
        style={{
          backgroundImage: `url(${guitar})`,
          width: "250px",
          height: "250px",
          boxShadow: "0 0 10px black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "15px",
          fontSize: "32px"
        }}
      ><h3><Link to="/guitars">Guitars</Link></h3></div>
     
      <div
        className={classes.guitars}
        style={{
          backgroundImage: `url(${piano1})`,
          width: "250px",
          height: "250px",
          boxShadow: "0 0 10px black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "15px",
          fontSize: "32px"

        }}
      ><h3><Link>Piano</Link></h3></div>

<div
        className={classes.guitars}
        style={{
          backgroundImage: `url(${electricguitar})`,
          width: "250px",
          height: "250px",
          boxShadow: "0 0 10px black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "15px",
          fontSize: "32px"

        }}
      ><h3><Link>Electric Guitars</Link></h3></div>

<div
        className={classes.guitars}
        style={{
          backgroundImage: `url(${microfon})`,
          width: "250px",
          height: "250px",
          boxShadow: "0 0 10px black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "15px",
          fontSize: "32px"

        }}
      ><h3><Link>Microfons</Link></h3></div>

<div
        className={classes.guitars}
        style={{
          backgroundImage: `url(${usiliteli})`,
          width: "250px",
          height: "250px",
          boxShadow: "0 0 10px black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "15px",
          fontSize: "32px"

        }}
      ><h3><Link>Usiliteli</Link></h3></div>

      <div
        className={classes.guitars}
        style={{
          backgroundImage: `url(${acuisticsistems})`,
          width: "250px",
          height: "250px",
          boxShadow: "0 0 10px black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "15px",
          fontSize: "32px"

        }}
      ><h3><Link>Acuistic sistems</Link></h3></div>
    
    </div>
  );
};

export default Catalog;
