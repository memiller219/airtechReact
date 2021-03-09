import React from "react";
import Homepage from "./components/homepage/homepage";
import ServiceSection from "./components/services/ServicesSection/ServicesSection";
import Quality from './components/quality/Quality'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <Homepage />
        <ServiceSection />
        <Quality />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
