import React from "react";
import "./NumbersData.scss";

const NumbersData = (props) => {
  const { numbers } = props;

  return (
    <div className="numbers-data">
      <div className="numbers-data__item">
        <span>{numbers.postCount}</span>
        <p>posts</p>
      </div>
      <div className="numbers-data__item">
        <span>{numbers.followerCount}</span>
        <p>followers</p>
      </div>
      <div className="numbers-data__item">
        <span>{numbers.followingCount}</span>
        <p>following</p>
      </div>
    </div>
  );
};

export default NumbersData;
