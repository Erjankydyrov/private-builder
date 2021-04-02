import classes from "./BunsIngredient.module.css";
import buns from "../../../images/buns.svg";
import bread from "../../../images/bread.svg";
import blackBun from "../../../images/blackBun.svg";
import croissant from "../../../images/croissant.svg";
import ecler from "../../../images/ecler.svg";
import eclerVanila from "../../../images/eclerVanila.svg";

const BunsIngredient = ({ type }) => {
  const types = {
    Buns: {
      backgroundImage: `url("${buns}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      display: "inline-block",
    },
    Bread: {
      backgroundImage: `url("${bread}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      display: "inline-block",
    },
    BlackBun: {
      backgroundImage: `url("${blackBun}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      display: "inline-block",
    },
    Croissant: {
      backgroundImage: `url("${croissant}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      display: "inline-block",
    },
    Ecler: {
      backgroundImage: `url("${ecler}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      display: "inline-block",
    },
    EclerVanila: {
      backgroundImage: `url("${eclerVanila}")`,
      backgroundSize: "Cover",
      width: "50px",
      height: "50px",
      display: "inline-block",
    },
  };

  return <div className={classes.BunsIngredient} style={types[type]}></div>;
};

export default BunsIngredient;
