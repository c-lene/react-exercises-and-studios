//need to import SaveButton and ClickedButton
import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";

//import styling
import "./styling.css";
import "./recipe.json";


function Button(props) {
  const saveButton = props.saveButton;

  //create conditional for these buttons
  let button = saveButton ? SaveButton() : ClickedButton();
   return button;
 }
 
 export default Button;
 

 
 
 