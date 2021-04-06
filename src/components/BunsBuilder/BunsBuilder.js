import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
  const [ingredients, setIngredients] = useState([
  ]);

  const [price, setPrice] = useState(150);
  const prices = {
    Buns: 5,
    Bread: 4,
    BlackBun: .5,
    Croissant: .5,
    Ecler: 3,
    EclerVanila: 2,
  };

  useEffect(() => {
    axios.get(`https://builder-3fa6d-default-rtdb.firebaseio.com/ingredients.json`)
        .then((responce) => {
          const ingredients = responce.data;
          setIngredients(Object.values(ingredients))
        })
  }, [])

  function addIngredient(type) {
    const newIngredients = [ ...ingredients ];
    newIngredients.push(type);
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = [ ...ingredients ];
    const index = newIngredients.lastIndexOf(type);
    if (index !== -1) {
      newIngredients.splice(index, 1);
    }
    setPrice(price - prices[type]);
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.BunsBuilder}>
      <BunsPreview price={price} ingredients={ingredients} />
      <BunsControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

export default React.memo(BunsBuilder);
