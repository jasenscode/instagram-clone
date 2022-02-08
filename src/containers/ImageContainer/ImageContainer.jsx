import React from "react";
import "./ImageContainer.scss";

const ImageContainer = (props) => {
  const { imgArr } = props;

  const createPost = imgArr.map((image, index) => {
    return <img className="image-container__picture" key={"picture" + index} src={image} alt="cat" />;
  });

  return <div className="image-container">{createPost}</div>;
};

export default ImageContainer;
