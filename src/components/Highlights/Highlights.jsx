import React from "react";
import "./Highlights.scss";

const Highlights = (props) => {
  const { highlights } = props;

  const createHighlight = highlights.map((highlight, index) => {
    return (
      <div className="highlights__item" key={"highlight" + index}>
        <img src={highlight.imgUrl} alt="highlight" />
        <span>{highlight.label}</span>
      </div>
    );
  });

  return <div className="highlights">{createHighlight}</div>;
};

export default Highlights;
