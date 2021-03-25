import classes from "./BunsIngredient.module.css";

const BunsIngredient = ({ type }) => {
  const types = {
    ChocolateBall: { backgroundColor: `red`, width: "35px", height: "35px" },
    StrawberryBall: { backgroundColor: `blue`, width: "35px", height: "35px" },
    SharpBall: { backgroundColor: `green`, width: "35px", height: "35px" },
  };

 


  return <div className={classes.BunsIngredient} style={types[type]}></div>;
};

export default BunsIngredient;
