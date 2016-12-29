import React, { PureComponent, PropTypes } from 'react';
import ChainStep from './ChainStep';


class Chain extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, exeptional, steps, externalAccess } = this.props;
    return (
      <li>
        <h3> {id} </h3>
        {steps.map((step, index) =>
          <ChainStep
            key={index}
            {...step}
          />
        )}
      </li>
    );
  }
}

Chain.propTypes = {
  id: PropTypes.string.isRequired,
  exeptional: PropTypes.array.isRequired,
  steps: PropTypes.array.isRequired,
  externalAccess: PropTypes.bool.isRequired,
};

export default Chain;
