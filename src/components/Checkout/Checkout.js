import BunsPreview from "../BunsBuilder/BunsPreview/BunsPreview";
import classes from "./Checkout.module.css";
import CheckoutForm from "./ChecoutForm/CheckoutForm";

const Checkout = ({ history }) => {
    
    function cancelCallback() {
        history.replace('/');
    }

    return ( 
        <div className={classes.Checkout}>
            <BunsPreview ingredients={{
                PBuns: 1,
                Bread: 1,
                BBuns: 1,
                Crois: 1,
                Ecler: 1,
                MBuns: 1,
            }} price={150} />
            <CheckoutForm />
        </div>
    );
}

export default Checkout ;