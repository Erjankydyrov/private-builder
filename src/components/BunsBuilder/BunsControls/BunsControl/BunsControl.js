import classes from "./BunsControl.module.css";

const BunsControl = ({ type }) => {
    return ( 
        <div className = {classes.BunsControl}>
            <button className = {classes.ControlA}>-</button>
            {type}
            <button className = {classes.ControlB}>+</button>
        </div>
    );
}
 
export default BunsControl;