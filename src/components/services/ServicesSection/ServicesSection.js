import React, { Component } from "react";
import "./ServicesSection.styles.scss";
import ServicesDetail from "../ServicesDetail/ServicesDetail";
import { BsTools, BsCalendar } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";

class ServicesSection extends Component {
  render() {
    let services = {
      servicing: [
        "Servicing & Repair",
        "We work on a wide range and variety of HVAC systems. From heat-pumps to water source units, and everything in between",
      ],
      replacing: [
        "System Replacement",
        "When it's time to replace your existing system with a brand new one, we are always looking after your time and best interests.",
      ],
      maintenance: ["Scheduled Maintenance", "Preventative maintenance is crucial when dealing with the harsh climate in the low-country. Having your system checked bi-annually is a great option."]
    };
    return (
      <div className="Services">
        <p className="heading">Our Services Include</p>
        <ServicesDetail
          description={services.servicing[0]}
          info={services.servicing[1]}
        >
          <BsTools />
        </ServicesDetail>
        <ServicesDetail
          description={services.replacing[0]}
          info={services.replacing[1]}
        >
          <GrPowerCycle />
        </ServicesDetail>
        <ServicesDetail description={services.maintenance[0]} info={services.maintenance[1]}>
          <BsCalendar />
        </ServicesDetail>
      </div>
    );
  }
}

export default ServicesSection;
