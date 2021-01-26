import React from "react";
import "./App.css";
import Questionnaire from "./components/Questionnaire";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
/*import Header from "./components/Header";
import Footer from "./components/Footer";*/

//SERVICES Question

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF6600",
    },
  },
  MuiButton: {
    "&:hover": {
      color: "#3A4C84",
    },
  }
});

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
    },
    containedPrimary: {
      "&:hover": {
        color: "#3A4C84",
      },
    },
  },
};

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Questionnaire />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
