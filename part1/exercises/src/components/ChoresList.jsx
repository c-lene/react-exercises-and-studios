import React from 'react';
import classes from './ChoresList.module.css';

function ChoresList () {
   return (
      <div>
         <h3 className={classes.choresHeading}>Today's Chores</h3>
         <ul className={classes.choresText}>
            <li>Do Laundry</li>
            <li>Water the Plants</li>
            <li>Complete Coding Exercises</li>
         </ul>
      </div>
   );
}

export default ChoresList;