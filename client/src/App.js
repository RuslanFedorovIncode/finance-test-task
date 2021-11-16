import React, { useEffect} from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ChooseToWatch from "./pages/ChooseToWatch/ChooseToWatch";
import socket from "./components/socket/socket";
import { loadCards } from "./redux/cards/actions";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      socket.emit("start");
      socket.on("ticker", (data) => {
        dispatch(loadCards(data))
      })
    } catch (error) {
      console.log(error);
    }
    return () => {
      socket.close();
    }
  },[dispatch])

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/chooseToWatch">
          < ChooseToWatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
