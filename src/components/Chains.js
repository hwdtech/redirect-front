import React, { PropTypes } from 'react';
import Chain from './Chain';
import ChainStepEditor from './ChainStepEditor';


const Chains = ({ chains, actors }) => (
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
    <h3>Add/Edit actor component</h3>
    <ChainStepEditor targets={actors}/>
  </div>
);

Chains.propTypes = {
  chains: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    exeptional: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    externalAccess: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default Chains;
