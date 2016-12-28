import React, { PropTypes } from 'react';
import Chain from './Chain';


const Chains = ({ chains }) => (
  <div style={{ whiteSpace: 'nowrap' }}>
    <h2>Chains</h2>
    <ul>
      {chains.map(chain =>
        <Chain
          key={chain.id}
          {...chain}
        />,
      )}
    </ul>
  </div>
);

Chains.propTypes = {
  chains: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    exeptional: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
    externalAccess: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default Chains;
