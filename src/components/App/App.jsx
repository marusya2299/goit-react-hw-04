import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

import { useState, useEffect } from 'react';

export default function App(){
  const [values, setValues] = useState(()=>{
    const savedValues = window.localStorage.getItem("feedback-values");
    return savedValues ? JSON.parse(savedValues) : {good: 0, neutral: 0, bad: 0};
  });

  useEffect(() => {
    window.localStorage.setItem("feedback-values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType)=>{
    setValues(value => ({...value, [feedbackType]: value[feedbackType] + 1}));
  }

  const resetFeedback = ()=>{
    setValues({good: 0, neutral: 0, bad: 0});
  }

  const totalFeedback  = values.good + values.neutral + values.bad;
  const positiveFeedback = totalFeedback  > 0 ? Math.round((values.good / totalFeedback ) * 100) : 0;


  return (
    <>
      <Description />
      <Options 
        totalFeedback ={totalFeedback } 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback} 
      />
      {totalFeedback  === 0 ? <Notification /> : <Feedback {...values} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} />}
    </>
  )

}