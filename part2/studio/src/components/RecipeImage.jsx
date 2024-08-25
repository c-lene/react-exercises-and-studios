//import json file for the data
import recipedata from "./recipe.json";

function RecipeImage() {
   return (
    <div>
      <img 
        //apply css for className recipeImage
        className="recipeImage"
        src={recipedata[0].recipeImage}
        alt={recipedata[0].name} 
      />
    </div>
   );
 }
 
 export default RecipeImage;
 
 
 
 