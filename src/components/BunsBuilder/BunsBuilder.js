import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
    const ingredients = {
        ChocolateBall: 6,
        StrawberryBall: 2,
        SharpBall: 8,
    };
    return ( 
        <div className = {classes.BunsBuilder}>
            <BunsPreview ingredients = {ingredients}/>
            <BunsControls />
        </div>
    );
}
 
export default BunsBuilder;