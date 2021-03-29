import BunsIngredient from "../BunsIngredient/BunsIngredient";
import classes from "./BunsPreview.module.css";

const BunsPreview = ({ ingredients }) => {
    const result =[];

    for (const ingredient in ingredients) {
        result.push(<BunsIngredient key={ingredients[ingredient] + ingredient} type={ingredients[ingredient]} />);
    }

    return ( 
        <div className = {classes.BunsPreview}>
            <div className={classes.ingredients}>
                {result}
            </div>
        </div>
    );
}
 
export default BunsPreview;