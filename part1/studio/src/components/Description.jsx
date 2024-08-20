import React from "react";
import styles from "./Description.module.css";



function RecipeAuthor() {
    let authorLink = "https://aaronandclaire.com/3-ways-to-enjoy-kimchi-fried-rice/";
    let authorPhoto = "https://aaronandclaire.com/wp-content/uploads/2023/07/profile-768x768.jpg";
    let authorName = "Aaron & Claire";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "KimChi Fried Rice" className={styles.imageUpdates} width={300}/>
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Aaron & Claire</a> 
           </div>
        </div>
     );
}


class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Kimchi Fried Rice</h1>
                    <p>Super easy recipe to make Homemade Kimchi Fried Rice right in you kitchen!</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}


export default RecipeDescription;
