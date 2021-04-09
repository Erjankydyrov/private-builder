import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = ({ show, children, cancel }) => {
  const style = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  };

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancel} />
      <div className={classes.content} style={style}>
        {children}
        <div className={classes.CaseButtons}>
          <Button onClick={cancel} green="true">Checkout</Button>
          <Button onClick={cancel} order="true">Cancel</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;