import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { menuItemStyles } from '../styles';


const LeftMenuButton = ({ onClick, text, link = '/' }) => (
  <li className="placeholder-button">
    <Button
      style={menuItemStyles}
      type="submit"
      bsStyle="primary"
      onClick={onClick}
    >
      {text}
    </Button>
    <Link to={link}>
      <Button
        style={menuItemStyles}
        type="submit"
        bsStyle="primary"
      >
        {text}
      </Button>
    </Link>
  </li>
);


LeftMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default LeftMenuButton;
