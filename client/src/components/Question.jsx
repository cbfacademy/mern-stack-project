import React, { useState } from "react";
import { render } from "react-dom";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import "./Question.css";

function Question(props) {
  const [showAnswer, setShowAnswer] = useState([false, 1]);
  let question = props.parentCallback(1);
  //question,setQuestion
  //if (!question){
  //setQuestion.propsparentCallback}
  

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
          spacing={2}
        >
          <Grid item xs={2}>
            <Paper>
              <Box width={5} height={50}>
                Previous
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper>
              <Box width={5} height={50}>
                Start
              </Box>
            </Paper>
          </Grid>
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
              <Paper>
                <Box width={600} height={600} textAlign="center" p={3}>
                  <h3>{`${question.questionText}`}</h3>
                  {question.options.map((option) => (
                    <Button
                      className="btn"
                      size="small"
                      style={{
                        fontSize: 16,
                        borderRadius: 2,
                        width: "70%",
                        margin: 5,
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
          question.id === showAnswer[1] && renderStatement(question)
        ) : (
          <p></p>
        )}
      </ul>

      <div className="Question">
        <questionService />
      </div>
    </div>
  );
}

export default Question;
