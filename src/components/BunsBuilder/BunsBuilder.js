import React from "react";
import { useState } from "react";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
  const [ingredients, setIngredients] = useState({
    Buns: 0,
    Bread: 0,
    BlackBun: 0,
    Croissant: 0,
    Ecler: 0,
    EclerVanila: 0,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.BunsBuilder}>
      <BunsPreview ingredients={ingredients} />
      <BunsControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

export default React.memo(BunsBuilder);
