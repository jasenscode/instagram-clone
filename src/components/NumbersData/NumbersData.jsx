import React from "react";
import "./NumbersData.scss";

const NumbersData = (props) => {
  const { numbers } = props;

  const shortenNumber = (number) => {
    if (number >= 0 && number < 99999) {
      return number;
    } else if (number > 99999 && number < 1000000) {
      return `${(number / 1000).toFixed(1)}k`;
    } else {
      return `${(number / 1000000).toFixed(1)}m`;
    }
  };

  return (
    <div className="numbers-data">
      <div className="numbers-data__item">
        <span>{shortenNumber(numbers.postCount)}</span>
        <p>posts</p>
      </div>
      <div className="numbers-data__item">
        <span>{shortenNumber(numbers.followerCount)}</span>
        <p>followers</p>
      </div>
      <div className="numbers-data__item">
        <span>{shortenNumber(numbers.followingCount)}</span>
        <p>following</p>
      </div>
    </div>
  );
};

export default NumbersData;
