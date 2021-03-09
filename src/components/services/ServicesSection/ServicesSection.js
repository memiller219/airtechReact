import React, { Component } from "react";
import "./ServicesSection.styles.scss";
import ServicesDetail from "../ServicesDetail/ServicesDetail";
import { BsTools, BsCalendar } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";

class ServicesSection extends Component {

   


  render() {
    let services = {
        repair: "Servicing & Repair",
        repairInfo: "We work on a wide range and variety of HVAC"
    }
    return (
      <div className="Services">
        <p className="heading">We Offer:</p>
        <ServicesDetail description={services.repair}>
          <BsTools />
        </ServicesDetail>
        <ServicesDetail>
          <GrPowerCycle />
        </ServicesDetail>
        <ServicesDetail>
          <BsCalendar />
        </ServicesDetail>
      </div>
    );
  }
}

export default ServicesSection;
