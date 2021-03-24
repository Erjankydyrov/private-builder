import DangoIngredient from "../DangoIngredient/DangoIngredient";
import classes from "./DangoPreview.module.css";

const DangoPreview = ({ ingredients }) => {
    const result =[];

    for (const ingredient in ingredients) {
        for (let i = 0; i < ingredients[ingredient]; i++) {
            result.push(<DangoIngredient type = {ingredient} />)
        }
    }

    return ( 
        <div className = {classes.DangoPreview}>
            <div className={classes.ingredients}>
                {result}
            </div>
        </div>
    );
}
 
export default DangoPreview;