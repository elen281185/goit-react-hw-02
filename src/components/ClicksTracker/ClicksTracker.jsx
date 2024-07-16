import { useState } from "react";

export default function ClicksTracker ({text}) {
    const [clicks, setClicks] = useState(0);
    const updatelClick = () => {
        setClicks(clicks+1);
    }
    return (
           <button onClick={updatelClick} >{text} {clicks}</button>
    );
   }