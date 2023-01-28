import React from "react";
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="web__header__nav">
      <Link to="/aboutme" className="web__header__nav--item">
        <FormattedMessage
          id="header.nav.button-aboutme"
          defaultMessage="About me"
        />
      </Link>
      <Link to="/projects" className="web__header__nav--item">
        <FormattedMessage
          id="header.nav.button-projects"
          defaultMessage="Projects"
        />
      </Link>
      <Link to="/skills" className="web__header__nav--item">
        <FormattedMessage
          id="header.nav.button-skills"
          defaultMessage="Skills"
        />
      </Link>
      <Link to="/certifications" className="web__header__nav--item">
        <FormattedMessage
          id="header.nav.button-certifications"
          defaultMessage="Certifications"
        />
      </Link>
      <Link to="contactme" className="web__header__nav--item">
        <FormattedMessage
          id="header.nav.button-contactme"
          defaultMessage="Contact me"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
