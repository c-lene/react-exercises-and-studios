import recipedata from "./recipe.json";

function RecipeName() {

  //import return the name of the recipe as a level 1 header
  const recipeName = (
    <div>
      <h1>{recipedata[0].name}</h1>
    </div>
  );
  
  return(
    <div>
      {recipeName}
    </div>
  );
}

export default RecipeName;

