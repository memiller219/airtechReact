import React from "react";
import Homepage from "./components/homepage/homepage";
import ServiceSection from "./components/services/ServicesSection/ServicesSection";
import Quality from './components/quality/Quality'

class App extends React.Component {
  render() {
    return (
      <>
        <Homepage />
        <ServiceSection />
        <Quality />
      </>
    );
  }
}

export default App;
