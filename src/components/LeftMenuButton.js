import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { menuItemStyles } from '../styles';


const LeftMenuButton = ({ onClick, text }) => (
  <li className="placeholder-button">
    <Button
      style={menuItemStyles}
      type="submit"
      bsStyle="primary"
      onClick={onClick}
    >
      {text}
    </Button>
  </li>
);


LeftMenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default LeftMenuButton;
