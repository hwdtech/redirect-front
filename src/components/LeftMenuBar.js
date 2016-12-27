import React, { PropTypes } from 'react';
import LeftMenuButton from './LeftMenuButton';


const LeftMenuBar = ({ onHomeClick, onMainLinkFormClick, onMainLinkListClick, onSubLinkFormClick }) => (
  <div className="col-sm-3 col-md-2 sidebar">
    <ul className="nav nav-sidebar">
      <LeftMenuButton onClick={onHomeClick} text="Home" />
      <LeftMenuButton onClick={onMainLinkFormClick} text="Main Link Form" link="main-link-form" />
      <LeftMenuButton onClick={onMainLinkListClick} text="Main Link List" link="links" />
      <LeftMenuButton onClick={onSubLinkFormClick} text="Sub Link Form" link="sub-link-form" />
    </ul>
  </div>
);

LeftMenuBar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onMainLinkFormClick: PropTypes.func.isRequired,
  onMainLinkListClick: PropTypes.func.isRequired,
  onSubLinkFormClick: PropTypes.func.isRequired,
};

export default LeftMenuBar;
