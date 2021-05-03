import classes from "./CheckoutForm.module.css";
import Button from "../../UI/Button/Button"

const CheckoutForm = () => {
  return (
    <form className={classes.CheckoutForm}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required  />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required  />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" required pattern="0[0-9]{9}" />
      </div>
      <div className={classes.Buttons}>
        <Button green="true">Checkout</Button>
        <Button order="true">Cancel</Button>
      </div>
    </form>
  );
}

export default CheckoutForm; 