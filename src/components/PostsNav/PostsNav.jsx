import React from "react";
import "./PostsNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostsNav = () => {
  return (
    <div className="posts-nav">
      <a href="">
        <FontAwesomeIcon icon="border-all" className="posts-nav__icon posts-nav__icon--active" />
      </a>
      <a href="">
        <FontAwesomeIcon icon="video" className="posts-nav__icon" />
      </a>
      <a href="">
        <FontAwesomeIcon icon={["far", "play-circle"]} className="posts-nav__icon" />
      </a>
      <a href="">
        <FontAwesomeIcon icon="id-card-alt" className="posts-nav__icon" />
      </a>
    </div>
  );
};

export default PostsNav;
