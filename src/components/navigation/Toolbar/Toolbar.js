import React from "react";
import "./Toolbar.styles.scss";
import Navigation from '../navigation'

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <a href="/">AIR | TECH</a>
      <nav>
          <Navigation />
      </nav>
    </header>
  );
};

export default Toolbar;
