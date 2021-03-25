import classes from "./DangoBuilder.module.css";
import DangoControls from "./DangoControls/DangoControls";
import DangoPreview from "./DangoPreview/DangoPreview";

const DangoBuilder = () => {
    const ingredients = {
        ChocolateBall: 6,
        StrawberryBall: 2,
        SharpBall: 8,
    };
    return ( 
        <div className = {classes.DangoBuilder}>
            <DangoPreview ingredients = {ingredients}/>
            <DangoControls />
        </div>
    );
}
 
export default DangoBuilder;