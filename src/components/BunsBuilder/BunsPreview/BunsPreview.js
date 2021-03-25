import BunsIngredient from "../BunsIngredient/BunsIngredient";
import classes from "./BunsPreview.module.css";

const BunsPreview = ({ ingredients }) => {
    const result =[];

    for (const ingredient in ingredients) {
        for (let i = 0; i < ingredients[ingredient]; i++) {
            result.push(<BunsIngredient type = {ingredient} />)
        }
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