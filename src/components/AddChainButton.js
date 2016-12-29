import React, { PropTypes } from 'react';


const AddChainButton = ({ id, title, link, ruleType, rule, onDeleteClick, onEditClick }) => (
  <div
    style={{
      display: 'inline-block',
      marginLeft: 20,
      padding: 10,
      borderRadius: 15,
      color: 'green',
      backgroundColor: '#c0c0c0',
      verticalAlign: 'middle',
    }}
  >
    <a>+</a>
  </div>
);

export default AddChainButton;
