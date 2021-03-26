import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
    const ingredients = {
        ChocolateBall: 100,
        StrawberryBall:10,
        SharpBall: 199,
    };
    return ( 
        <div className = {classes.BunsBuilder}>
            <BunsPreview ingredients = {ingredients}/>
            <BunsControls />
        </div>
    );
}
 
export default BunsBuilder;