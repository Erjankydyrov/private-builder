import BunsIngredient from "../../BunsIngredient/BunsIngredient";
import classes from "./BunsControl.module.css";

const BunsControl = ({ type }) => {
    return ( 
        <div className = {classes.BunsControl}>
            <button className = {classes.ControlButton}>-</button>
            <BunsIngredient type = {type} />
            <button className = {classes.ControlButton}>+</button>
        </div>
    );
}
 
export default BunsControl;