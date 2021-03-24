import classes from "./DangoIngredient.module.css";

const DangoIngredient = ({ type }) => {
  const types = {
    ChocolateBall: { backgroundColor: `red`, width: "35px", height: "35px" },
    StrawberryBall: { backgroundColor: `blue`, width: "35px", height: "35px" },
    SharpBall: { backgroundColor: `green`, width: "35px", height: "35px" },
  };

  function getPosition(ingredientWidth) {
    const dangoDiameter = 380;
    const dangoRadius = dangoDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const Top = Math.round(Math.random() * dangoDiameter);
    const Left = Math.round(Math.random() * dangoDiameter);

    const distance =
      Math.sqrt(
        Math.pow(Top - dangoRadius, 2) +
          Math.pow(Left - dangoRadius, 2)
      ) + ingredientRadius;

    return distance < dangoRadius
      ? {
          top: Top - ingredientRadius,
          left: Left - ingredientRadius,
        }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return <div className={classes.DangoIngredient} style={types[type]}></div>;
};

export default DangoIngredient;
