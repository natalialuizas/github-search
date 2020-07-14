import React from "react";
import "./style.css";

import locationIcon from "../../../assets/images/icons/location-icon.svg";
import repoIcon from "../../../assets/images/icons/repositorie-icon.svg";
import followersIcon from "../../../assets/images/icons/followers-icon.svg";

const CardProfile = ({
  avatar,
  name,
  bio,
  location,
  repo,
  followers,
  following,
}) => {
  return (
    <div className="cardProfile__container">
      <img src={avatar} className="cardProfile__img" alt="Foto do Perfil" />
      <h3 className="cardProfile__title">{name}</h3>
      <p>{bio}</p>
      <div className="infos__container">
        <div className="icon__container">
          <img className="icon" src={locationIcon} alt="Icon Localização"></img>
          <p>{location}</p>
        </div>
        <div className="icon__container">
          <img className="icon" src={repoIcon} alt="Icon Localização"></img>
          <p>{repo}</p>
        </div>
        <div className="icon__container">
          <img
            className="icon"
            src={followersIcon}
            alt="Icon Localização"
          ></img>
          <p>{followers}</p>
        </div>
        <div className="icon__container">
          <img
            className="icon"
            src={followersIcon}
            alt="Icon Localização"
          ></img>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
