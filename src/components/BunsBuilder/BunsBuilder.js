import React from "react";
import { useState } from "react";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
  const [ingredients, setIngredients] = useState([
    "Buns",
    "Bread",
    "BlackBun",
    "Croissant",
    "Ecler",
    "EclerVanila",
  ]);

  function addIngredient(type) {
    const newIngredients = [ ...ingredients ];
    newIngredients.push(type);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = [ ...ingredients ];
    const index = newIngredients.lastIndexOf(type);
    if (index !== -1) {
      newIngredients.splice(index, 1);
    }
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.BunsBuilder}>
      <BunsPreview ingredients={ingredients} />
      <BunsControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

export default React.memo(BunsBuilder);
