import BunsIngredient from "../BunsIngredient/BunsIngredient";
import classes from "./BunsPreview.module.css";
import tray from "../../../images/plate.jpg"

const BunsPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<BunsIngredient key={ingredient + i} type={ingredient} />);
    }
  }

  return (
    <div className={classes.BunsPreview}>
      <div className={classes.bun}>
        <div className={classes.ingredients} style={
          { backgroundImage: `url(${tray})`, backgroundSize: `cover`, backgroundPosition: `center` }
        }>{result}</div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
};

export default BunsPreview;
