import classes from "./DangoIngredient.module.css";

const DangoIngredient = ({ type }) => {
  const types = {
    ChocolateBall: { backgroundColor: `red`, width: "35px", height: "35px" },
    StrawberryBall: { backgroundColor: `blue`, width: "35px", height: "35px" },
    SharpBall: { backgroundColor: `green`, width: "35px", height: "35px" },
  };

 


  return <div className={classes.DangoIngredient} style={types[type]}></div>;
};

export default DangoIngredient;
