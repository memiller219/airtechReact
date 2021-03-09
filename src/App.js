import React from "react";
import Homepage from "./components/homepage/homepage";
import ServiceSection from "./components/services/ServicesSection/ServicesSection";

class App extends React.Component {
  render() {
    return (
      <>
        <Homepage />
        <ServiceSection />
      </>
    );
  }
}

export default App;
