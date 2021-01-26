import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import "./Question.css";

function Question(props) {
  const [id, setId] = useState(1);

  const handleClick = (target) => {
    setId(target);

    return renderElement(target);
  };

  const renderElement = (id) => {
    let question = props.parentCallback(id);

    if (null !== question) {
      return "statement" === question.type
        ? renderStatement(question)
        : renderQuestion(question);
    }
  };

  const renderStatement = (statement) => {
    return (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Paper elevation={3}>
            <Box
                  width={500}
                  height={500}
                  margin={8}
                  textAlign="center"
                  p={3}
                >
                <h3>{statement.questionText}</h3>
                {statement.Text.map((answer) => (
                  <p key={answer.id}>{answer}</p>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
    );
  };

  const renderQuestion = (question) => {
    if (question && question.type !== "statement") {
      return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Paper elevation={3}>
                <Box
                  width={500}
                  height={500}
                  margin={8}
                  textAlign="center"
                  p={3}
                >
                  <h3>{`${question.questionText}`}</h3>
                  {question.options.map((option) => (
                    <Button
                    key={option.Target}
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
      );
    }
  };

  return (
    <div>
      {renderElement(id)}
    </div>
  );
}

export default Question;
