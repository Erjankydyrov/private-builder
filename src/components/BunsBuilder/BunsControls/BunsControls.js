import BunsControl from "./BunsControl/BunsControl";
import classes from "./BunsControls.module.css";

const BunsControls = ({ addIngredient, removeIngredient }) => {
  const result = [];
  const ingredients = [
    "Buns",
    "Bread",
    "BlackBun",
    "Croissant",
    "Ecler",
    "EclerVanila",
  ];
  for (const ingredient in ingredients) {
    result.push(
      <BunsControl
        type={ingredients[ingredient]}
        key={ingredients[ingredient]}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );
  }
  return <div className={classes.BunsControls}>{result}</div>;
};

export default BunsControls;
