import "./styling.css";
import "./recipe.json";

function ClickedButton() {
  function handleClick() {
    alert("You are removing this pin!");
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved - DONE
//create button - DONE
//import styling and assign correct className clickedButton - DONE
