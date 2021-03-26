import classes from "./BunsIngredient.module.css";

const BunsIngredient = ({ type }) => {
  const types = {
    Bun1: { backgroundColor: `red`, width: "35px", height: "35px", display: "inline-block" },
    Bun2: { backgroundColor: `blue`, width: "35px", height: "35px", display: "inline-block" },
    Bun3: { backgroundColor: `green`, width: "35px", height: "35px", display: "inline-block" },
    Bun4: { backgroundColor: `pink`, width: "35px", height: "35px", display: "inline-block" },
    Bun5: { backgroundColor: `orange`, width: "35px", height: "35px", display: "inline-block" },
    Bun6: { backgroundColor: `yellow`, width: "35px", height: "35px", display: "inline-block" },
  };

 


  return <div className={classes.BunsIngredient} style={types[type]}></div>;
};

export default BunsIngredient;
