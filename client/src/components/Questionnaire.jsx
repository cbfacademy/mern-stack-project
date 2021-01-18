import React, { useState, useEffect } from "react"; 
import Question from "./Question";
import questionService from "../services/questionService";

function App() {
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
          <Question />
      </div>
  );
}
  
    
     export default App;