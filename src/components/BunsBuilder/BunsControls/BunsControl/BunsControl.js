import BunsIngredient from "../../BunsIngredient/BunsIngredient";
import classes from "./BunsControl.module.css";

const BunsControl = ({ switchFilling, type, addIngredient, removeIngredient }) => {

    return ( 
        <div className = {classes.BunsControl}>
            <button className = {classes.ControlButton} onClick = {() => removeIngredient(type)}>-</button>
            <BunsIngredient type = {type} />
            <button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</button>
        </div>
    );
}
 
export default BunsControl;