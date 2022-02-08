import React from "react";
import "./ProfileHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileHeader = (props) => {
  const { headerData } = props;

  return (
    <div className="profile-header">
      <img src={headerData.profilePic} alt="Profile" className="profile-header__image" />
      <div className="profile-header__info">
        <div className="profile-header__details">
          <p className="profile-header__name">{headerData.displayName}</p>
          {headerData.isVerified ? <FontAwesomeIcon icon="check-circle" className="profile-header__verified" /> : null}
          <a href="#">
            <FontAwesomeIcon icon="ellipsis-h" className="profile-header__more" />
          </a>
        </div>
        <div className="profile-header__buttons">
          <button className="profile-header__buttons--follow">Follow</button>
          <button>
            <FontAwesomeIcon icon="angle-down" className="profile-header__buttons--more" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
