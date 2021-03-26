import classes from "./BunsBuilder.module.css";
import BunsControls from "./BunsControls/BunsControls";
import BunsPreview from "./BunsPreview/BunsPreview";

const BunsBuilder = () => {
    const ingredients = {
        Bun1: 100,
        Bun2: 10,
        Bun3: 199,
        Bun4: 199,
        Bun5: 199,
        Bun6: 199,
    };
    return ( 
        <div className = {classes.BunsBuilder}>
            <BunsPreview ingredients = {ingredients}/>
            <BunsControls />
        </div>
    );
}
 
export default BunsBuilder;