import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";

function Navbar(){
    return (
      <AppBar position='static' color='default'>
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/chooseToWatch">Choose to watch</Button>
        </Toolbar>
      </AppBar>
    )
}

export default Navbar;
