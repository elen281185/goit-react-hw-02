import { useState } from "react";
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import Notification from "../Notification/Notification";
export default function App () {
   const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    });
 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const handleFeedback = (type) => {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [type]: prevFeedback[type] + 1
      }));
    };
  
    return (
      <div>
        <p>{totalFeedback}</p>
        <Description/>
        <Options onLeaveFeedback={handleFeedback} />
        <>{totalFeedback >0 ? < Feedback feedback={feedback} /> : <Notification/>}</>
       {/* < Feedback feedback={feedback} />*/}
      </div>
    );
   }