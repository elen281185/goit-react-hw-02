export default function Feedback ({feedback}) {
    return (
      
      <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {feedback.good+feedback.neutral+feedback.bad}</p>
    </div>
  );
    
   }