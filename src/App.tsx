import { Box } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "./theme";


function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          hijhhj
        </ThemeProvider>
    </div>
  );
}

export default App;