// import React from "react";
import styles from './Description.module.css';


export default function RecipePhoto() {
    return(
        <img src="https://aaronandclaire.com/wp-content/uploads/2021/07/%EC%8D%B8%EB%84%A4%EC%9D%BC-2-768x432.jpg" 
            alt=" Kimchi Fried Rice recipe photo" 
            className = {styles.imageUpdates}
            width={500}
        />
    );
}