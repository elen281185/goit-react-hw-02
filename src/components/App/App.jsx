import { useState, useEffect } from "react";
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification";
export default function App () {
   const [clicks, setClicks] = useState(()=> {
    const savedClicks = localStorage.getItem("num-of-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
          good: 0,
          neutral: 0,
          bad: 0
          };
        });

   useEffect(() => {
   localStorage.setItem("num-of-clicks", JSON.stringify(clicks));
   console.log("This is mount", clicks);
                   }, [clicks]);

 const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
    const handleFeedback = (type) => {
      setClicks((prevClicks) => ({
        ...prevClicks,
        [type]: prevClicks[type] + 1
      }));
    };
  const resetClicks = () => {
    setClicks ({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
    return (
      <div>
        <Description/>
        <Options onLeaveFeedback={handleFeedback} resetClicks={resetClicks} totalFeedback={totalFeedback}  />
        <>{totalFeedback >0 ? < Feedback feedback={clicks} totalFeedback={totalFeedback} /> : <Notification/>}</>
       {/* < Feedback feedback={feedback} />*/}
      </div>
    );
   }