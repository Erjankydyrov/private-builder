import classes from "./BunsIngredient.module.css";

const BunsIngredient = ({ type }) => {
  const types = {
    ChocolateBall: { backgroundColor: `red`, width: "35px", height: "35px", display: "inline-block" },
    StrawberryBall: { backgroundColor: `blue`, width: "35px", height: "35px", display: "inline-block" },
    SharpBall: { backgroundColor: `green`, width: "35px", height: "35px", display: "inline-block" },
  };

 


  return <div className={classes.BunsIngredient} style={types[type]}></div>;
};

export default BunsIngredient;
