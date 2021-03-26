import React from "react";
import { useState } from "react";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
  const [ingredients, setIngredients] = useState({
    Bun1: 0,
    Bun2: 0,
    Bun3: 0,
    Bun4: 0,
    Bun5: 0,
    Bun6: 0,
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
