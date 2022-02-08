import React from "react";
import "./Bio.scss";

const Bio = (props) => {
  const { bioData } = props;

  return (
    <div className="bio">
      <p className="bio__header">{bioData.bioHeader}</p>
      <p className="bio__body">{bioData.bioBody}</p>
      <a href="/#" className="bio__url">
        {bioData.bioUrl}
      </a>
    </div>
  );
};

export default Bio;
