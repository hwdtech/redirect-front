import React, { PropTypes } from 'react';
import LeftMenuButton from './LeftMenuButton';


const LeftMenuBar = ({ onHomeClick, onMainLinkFormClick, onSubLinkFormClick }) => (
  <div className="col-sm-3 col-md-2 sidebar">
    <ul className="nav nav-sidebar">
      <LeftMenuButton onClick={onHomeClick} text="Home" />
      <LeftMenuButton onClick={onMainLinkFormClick} text="Main Link Form" link="main-link-form" />
      <LeftMenuButton onClick={onSubLinkFormClick} text="Sub Link Form" link="sub-link-form" />
      <LeftMenuButton onClick={() => {}} text="Chains" link="chains-of-actors" />
    </ul>
  </div>
);

LeftMenuBar.propTypes = {
  onHomeClick: PropTypes.func.isRequired,
  onMainLinkFormClick: PropTypes.func.isRequired,
  onSubLinkFormClick: PropTypes.func.isRequired,
};

export default LeftMenuBar;
