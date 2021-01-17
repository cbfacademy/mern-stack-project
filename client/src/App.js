import React, { useState, useEffect } from "react";
import "./App.css";

//SERVICES Question
import questionService from "./services/questionService";

function App() {
  const [question, setquestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState([false, 1]);

  useEffect(() => {
    if (!question) {
      getquestions();
    }
  });

  const getquestions = async () => {
    let res = await questionService.getAll();
    setquestion(res);
  };

function handleClick(target) {
  console.log(target)
  setShowAnswer([true,target])


   }



const renderStatement = (statement) => {
  console.log(statement)
  return (
    <div>
    <h3>
      {statement.questionText}
    </h3>
    {statement.Text.map((answer)=>(
      <p>
      {answer}
      </p>
    ))}
    </div>
  )

    }

  const renderQuestion = (question) => {
      if (question.type !== "statement"){
        return (
          <text key={question.id}>
        <h3>
          {`${question.questionText}`}
        </h3>
        {question.options.map((option)=>(
          <button onClick={() => handleClick(option.Target)}>{option.Text}</button>
        ))}
      </text>

        )
      }
  };


  return (
    <div>
      <ul>
        {question && question.length > 0 ? (
          question.map((question) => renderQuestion(question))
        ) : (
          <p>No users found</p>
        )}
      </ul>
      <ul>
        {showAnswer[0]? 
         question.map((question) => {
          if(question.id === showAnswer[1]){
            return renderStatement(question)
          }
    
    }) :(<p>Pick an entity</p>)}


      </ul>
    </div>
  );
}

export default App;
