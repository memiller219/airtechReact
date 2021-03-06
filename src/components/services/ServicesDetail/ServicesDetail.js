import React from "react";
import "./ServicesDetail.styles.scss";

const ServicesDetail = (props) => {
  return (
    <div className="container">
      <div className="icon">{props.children}</div>
      <div className="description">{props.description}</div>
      <div className="information">{props.info}</div>
    </div>
  );
};

export default ServicesDetail;
