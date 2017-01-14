import React, { PropTypes } from 'react';
import Chain from './Chain';
import ChainStepEditor from './ChainStepEditor';


const Chains = ({ chains, actors, onDeleteStepClick }) => (
  <div style={{ whiteSpace: 'nowrap' }}>
    <h2>Chains</h2>
    <ul>
      {chains.map((chain, index) =>
        <Chain
          key={chain.id}
          chainId={chain.id}
          {...chain}
          onDeleteStepClick={onDeleteStepClick}
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
  onDeleteStepClick: PropTypes.func.isRequired,
};

export default Chains;
