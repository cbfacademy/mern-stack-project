import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./Question.css";


function Question(props) {
  const [showAnswer, setShowAnswer] = useState([false, 1]);
  //const [question, setquestion] = useState(null);
  let question = props.parentCallback(1);
 // if (!question){
  //setquestion.propsparentCallback}
  

  function handleClick(target) {
    props.parentCallback(target);
    setShowAnswer([true, target]);
  }

  const renderStatement = (statement) => {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Paper>
              <Box width={600} height={300} textAlign="center" p={5}>
                <h3>{statement.questionText}</h3>
                {statement.Text.map((answer) => (
                  <p>{answer}</p>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={2}>
        </Grid>
      </div>
    );
  };

  const renderQuestion = (question) => {
    if (question && question.type !== "statement") {
      return (
        <text key={question.id}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={3}>
                <Box width={500} height={500} margin={8} textAlign="center" p={3}>
                  <h3>{`${question.questionText}`}</h3>
                  {question.options.map((option) => (
                    <Button
                     startIcon={<ArrowRightIcon />}
                      size="small"
                      style={{
                        fontFamily: "Rubik",
                        fontSize: 16,
                        borderRadius: 2,
                        width: "70%",
                        margin: 7,
                        justifyContent: "left",
                      }}
                      onClick={() => handleClick(option.Target)}
                      variant="outlined"
                      color="primary"
                    >
                      {option.Text}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </text>
      );
    }
  };
  

  return (
    <div>
      <ul>{renderQuestion(question)}</ul>
      <ul>
       {showAnswer[0] ? (
         // Have an if statement to check if target == docuements
         //If it is, then renderQuestions
         // if not, then renderStatement
         renderStatement(props.parentCallback(showAnswer[1]))
        ) : (
          <p>No data</p>
        )}
      </ul>

      <div className="Question">
        <questionService />
      </div>
    </div>
  );
}

export default Question;
