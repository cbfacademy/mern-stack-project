import React, { useState, useEffect } from "react";
import Question from "./Question";
import questionService from "../services/questionService";

function Questionnaire() {
  const [questions, setquestions] = useState(null);
  //set state variable

  useEffect(() => {
    if (!questions) {
      getquestions();
    }
  }, []);

  const getquestions = async () => {
    let res = await questionService.getAll();
    //let question = res [0];
    setquestions(res);
  };

  function getCurrentQuestion(target) {
    if (questions) {
     // console.log(questions)
      let question = questions.filter((question) => question.id === target);
      
      return question.length > 0 ? question[0] : null;
    }
    return null;
  }
  //state variable

  return (
    <div className="Questionnaire">
      <Question parentCallback={getCurrentQuestion} />
    </div>
  );
}

export default Questionnaire;
