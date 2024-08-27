import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://aaronandclaire.com/3-ways-to-enjoy-kimchi-fried-rice/";
   let authorPhoto = "https://aaronandclaire.com/wp-content/uploads/2023/07/profile-768x768.jpg";
   let authorName = "Aaron and Claire";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%"}} width="400px"/>
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "Cooked Rice", 
      "well-fermented Kimchi", 
      "Green Onions", 
      "Vegetable Oil", 
      "Toasted Sesame Oil"
    ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   let recipeName = "Kimchi Fried Rice";
   let recipeDescription = "This recipe for making Kimchi Fried Rice easily at home";

   return (
      <div> 
         <div>
            <h1>{recipeName}</h1>
            <p>{recipeDescription}</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   let recipeImage = "https://aaronandclaire.com/wp-content/uploads/2021/07/%EC%8D%B8%EB%84%A4%EC%9D%BC-2-768x432.jpg"
   let recipeName = "Kimchi Fried Rice"

   return (
      <img src={recipeImage} alt={recipeName} className="imageUpdates" width="500px" />
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
