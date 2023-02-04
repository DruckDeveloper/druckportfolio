import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTelegram } from "react-icons/bs";

const IconsGrid = () => {
  const iconSize = "30px";
  const iconColor = "#ffffff";

  return (
    <div className="web__header__icons">
      <div className="web__header__icons--row-1">
        <a href="#">
            <BsLinkedin size={iconSize} color={iconColor} />
        </a>
        <a href="#">
            <BsGithub size={iconSize} color={iconColor} />
        </a>
        <a href="#">
            <AiFillTwitterCircle size={iconSize} color={iconColor} />
        </a>
      </div>
      <div className="web__header__icons--row-2">
        <a href="#">
            <IoLogoWhatsapp size={iconSize} color={iconColor} />
        </a>
        <a href="#">
            <BsTelegram size={iconSize} color={iconColor} />
        </a>
      </div>
    </div>
  );
};

export default IconsGrid;
