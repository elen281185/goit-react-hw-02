
import { useState, useEffect } from "react";
import ClicksTracker from "../ClicksTracker/ClicksTracker";
export default function Options ({ onLeaveFeedback, resetClicks, totalFeedback }) {
 
 //  const [clicks,  setClicks] = useState(0);
// const updatelClick = () =>{
  //    setClicks(clicks + 1);
  //   console.log ("Hello! This is click))", clicks);
  // }
   // const resetClicks = () => {
   // ClicksTracker.setClicks(0);
  //  }
   // return (
       
        return (
            <div>
              <button onClick={() => onLeaveFeedback('good')}>Good</button>
              <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
              <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
              {totalFeedback >0 && <button onClick={() => resetClicks()}>Reset</button>}
            </div>
          );
     //  <div>
     //  <ClicksTracker text="Good"/>
      // <ClicksTracker text="Neutral"/>
      //  <ClicksTracker text="Bad"/>
     // <ClicksTracker onClick={resetClicks} text="Reset"/>


   ///  <button onClick={updatelClick}>Good {clicks}</button>
    // <button onClick={updatelClick}>Neutral{clicks}</button>
    // <button onClick={updatelClick}>Bad {clicks}</button>
    // <button onClick={resetClicks}>Reset </button>
    // </div>
        //);
   }