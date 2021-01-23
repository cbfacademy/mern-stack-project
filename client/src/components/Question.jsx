import React, { useState } from "react";
import Button from "@material-ui/core/Button"
import "./Question.css";


  function Question ({question}) {
  const [showAnswer, setShowAnswer] = useState([false, 1]);




    
   

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
            <Button
            size="medium"
            style={{
              fontSize: 16,
              borderRadius: 2,
              width: '50%',
              margin: 5,
            }}
            onClick={() => handleClick(option.Target)} 
            variant="outlined" 
            color="primary"
            >{option.Text}
            </Button>
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
            return null
      
      }) :(<p>Please choose an entity type</p>)}
       
      
  
        </ul>

      <div className= "Question">
          <questionService />
      </div>
      </div>
    );

    


    
  }
  
  export default Question;
  