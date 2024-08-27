import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState("no boards yet!");

   const boards = [
      {
         label: "Asian",
         value: "Asian Recipes",
      }, 
      {
         label: "Western",
         value: "Western Recipes",
      },
      {
         label: "Dump & Go",
         value: "Dump & Go Recipes",
      },
   ];

   const handleChange = (event) => {
      setName((boardName) => event.target.value)
   }

   const selectBoard = boards.map((board) => {
      return (
         <option value={board.value}>{board.label}</option>
      )
   });

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {selectBoard}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
