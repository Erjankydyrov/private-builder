import Button from "../../UI/Button/Button";
import BunsControl from "./BunsControl/BunsControl";
import classes from "./BunsControls.module.css";
import SwitchBun from "./SwitchBun/SwitchBun";


const BunsControls = ({ switchFilling, filling, addIngredient, removeIngredient }) => {
  
  const result = [];
  const ingredients = [
    "PBuns",
    "Bread",
    "BBuns",
    "Crois",
    "Ecler",
    "MBuns",
  ];

  for (const ingredient in ingredients) {
    result.push(
      <BunsControl
        type={ingredients[ingredient] + filling}
        key={ingredients[ingredient]}
        switchFilling={switchFilling}
        count={ingredients[ingredient]}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    );

    
  }
  return <div className={classes.BunsControls}>
    <SwitchBun switchFilling={switchFilling} />
    {result}
    <Button disabled={!ingredients.length}>Order</Button>
    </div>;
};

export default BunsControls;
