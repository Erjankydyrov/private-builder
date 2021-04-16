import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({ history }) => {
    
    function cancelCallback() {
        history.replace('/');
    }

    return ( 
        <div className={classes.CheckoutSummary}></div>
    );
}
 
export default CheckoutSummary;