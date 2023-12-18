import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header"
import Homepage from "./Pages/Homepage";
import React from 'react';
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core"
import Alert from './components/Alert'
function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }));
  const classes = useStyles()
  function globalErrorHandler(event) {
    const error = event.error;
    if (error && error.isAxiosError && !error.response) {
      // Handle Axios network errors
      console.error('Axios network error:', error.message);
      // Optionally, provide a fallback or show a user-friendly message
      event.preventDefault();
      // You can preventDefault to avoid showing the error in the console or on the screen
    }
  }

  // Add event listener for the 'error' event on the window object
  React.useEffect(() => {
    window.addEventListener('error', globalErrorHandler);
    return () => {
      window.removeEventListener('error', globalErrorHandler);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className={classes.App}> 
            <Header />
            <Route path = "/" component={Homepage} exact />
            <Route path = "/coins/:id" component={CoinPage} />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
