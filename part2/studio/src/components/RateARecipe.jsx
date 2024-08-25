let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];


function RateARecipe(props) {
  
  //conditional to render stars based on a number provided in App.js
  let stars = props.rating >= 1 && props.rating <= 5 ? GiveRating(props) : null;
  
  return stars;
}

function GiveRating(props) {
  return <h3>{stars[props.rating - 1]}</h3>;
}


export default RateARecipe;



