import React from "react";
import "./App.css";
import { AppProvider } from "./App.context";
import Demo from "./Demo";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Header from "./component/header/Header";

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
  },
  palette: {
    common: { black: "rgba(0, 0, 0, 1)", white: "#fff" },
    background: {
      paper: "rgba(255, 255, 255, 1)",
      default: "rgba(241, 243, 249, 1)",
    },
    primary: {
      light: "rgba(0, 150, 199, 1)",
      main: "rgba(0, 119, 182, 1)",
      dark: "rgba(27, 73, 101, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(32, 186, 197, 1)",
      main: "rgba(63, 193, 192, 1)",
      dark: "rgba(0, 178, 202, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(244, 162, 97, 1)",
      main: "rgba(231, 111, 81, 1)",
      dark: "rgba(233, 196, 106, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(63, 66, 84, 1)",
      secondary: "rgba(126, 130, 153, 1)",
      disabled: "rgba(181, 181, 195, 1)",
      hint: "rgba(173, 232, 244, 1)",
    },
  },
});
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppProvider>
        <div className="App">
          <Header />
          <h1>Hello from react</h1>
          <Demo />
        </div>
      </AppProvider>
    </MuiThemeProvider>
  );
}

export default App;
