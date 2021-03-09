import React from "react";
import "./homepage.styles.scss";
import Toolbar from '../navigation/Toolbar/Toolbar';


const Homepage = (props) => {
  return (
    <div className="homepage">
        <Toolbar />
      <div className="banner">
        Welcome to <br />
        <span className="brand">
          Air - <span className="tech">Tech</span>
        </span>
        <br />
        <span className="heat">Heating & Air</span>
      </div>
    </div>
  );
};

export default Homepage;
