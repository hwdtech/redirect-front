import React, { PropTypes } from 'react';


const Chain = ({ id, exeptional, steps, externalAccess }) => (
  <li>
    <h3> {id} </h3>
    {steps.map((step, index) =>
      <div
        style={{
          display: 'inline-block',
          marginLeft: 10,
          padding: 10,
          verticalAlign: 'middle',
          backgroundColor: '#c0c0c0',
        }}
        key={index}
      >
        {step.target && <h4>target: {step.target}</h4>}

        {step.chain && <p>chain: {step.chain}</p>}
        {step.handler && <p>handler: {step.handler}</p>}
        {step.wrapper && <p>wrapper</p>}
      </div>,
    )}
  </li>
);

Chain.propTypes = {
  id: PropTypes.string.isRequired,
  exeptional: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
  externalAccess: PropTypes.bool.isRequired,
};

export default Chain;
