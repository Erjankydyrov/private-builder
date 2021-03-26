import BunsControl from "./BunsControl/BunsControl";
import classes from "./BunsControls.module.css";

const BunsControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const result = [];
  for (const ingredient in ingredients) {
    result.push(
      <BunsControl
        type={ingredient}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );
  }
  return <div className={classes.BunsControls}>{result}</div>;
};

export default BunsControls;
