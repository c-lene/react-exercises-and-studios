//import json file for the data - DONE
import recipedata from "./recipe.json";



function IngredientList() {
  
  //use a nested map to get inside the inner array
  const ingredientItem = recipedata[0].ingredients.map((ingredient, index) => {
    return (
      <li key={index}>{ingredient}</li>
    );
  });
  
  return(
    <div>
      <h3>Ingredients</h3>
      <ul>{ingredientItem}</ul>
    </div>
   );
 }
 
 
 export default IngredientList;