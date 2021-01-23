import React, { useState, useEffect } from "react"; 
import Question from "./Question";
import questionService from "../services/questionService";

function Questionnaire() {
    const [question, setquestion] = useState(null);
  
    useEffect(() => {
      if (!question) {
        getquestions();
      }
    });
  
    const getquestions = async () => {
      let res = await questionService.getAll();
      setquestion(res);
    };

    return (
      <div className= "Questionnaire">
          <Question question={question}/>
      </div>

  
  );

  

}
  
    
     export default Questionnaire;