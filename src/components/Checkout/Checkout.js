import BunsPreview from "../BunsBuilder/BunsPreview/BunsPreview";
import classes from "./Checkout.module.css";
import CheckoutForm from "./ChecoutForm/CheckoutForm";
import axios from "axios";

const Checkout = ({ history }) => {
    
    function cancelCallback() {
        history.replace('/');
    }

    function submitCallback(event) {
        const data = new FormData(event.target);
    
        axios.post('https://builder-3fa6d-default-rtdb.firebaseio.com/orders.json', {
          name: data.get('name'),
          address: data.get('address'),
          phone: data.get('phone'),
          ingredients: {
            PBuns: 10,
            Bread: 10,
            BBuns: 10,
            Crois: 10,
            Ecler: 10,
            MBuns: 10,
          },
          price: 100,
        }).then(response => {
          history.replace('/');
        });
    
        event.preventDefault();
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
            <CheckoutForm
                cancelCallback={cancelCallback}
                submitCallback={submitCallback} />
        </div>
    );
}

export default Checkout ;