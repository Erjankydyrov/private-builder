import classes from "./BunsControl.module.css";

const BunsControl = ({ type }) => {
    return ( 
        <div className = {classes.BunsControl}>
            <button className = {classes.ControlButton}>-</button>
            {type}
            <button className = {classes.ControlButton}>+</button>
        </div>
    );
}
 
export default BunsControl;