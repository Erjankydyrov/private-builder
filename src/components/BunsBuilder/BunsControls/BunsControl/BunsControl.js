import Button from "../../../UI/Button/Button";
import BunsIngredient from "../../BunsIngredient/BunsIngredient";
import classes from "./BunsControl.module.css";

const BunsControl = ({ count, type, filling, addIngredient, removeIngredient }) => {

    return ( 
        <div className = {classes.BunsControl}>
            <Button className = {classes.ControlButton} onClick = {() => removeIngredient(type)} disabled={!count}>-</Button>
            <BunsIngredient type = {type + filling} />
            <Button className = {classes.ControlButton} onClick = {() => addIngredient(type)}>+</Button>
        </div>
    );
}
 
export default BunsControl;