import React from 'react';
import { Link } from 'react-scroll';

const Buttons = () => {
  return (
    <div>
      <Link
        activeClass="active"
        to="navbar"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Go to Navigation Bar
      </Link>
    </div>
  );
};

export default Buttons;
