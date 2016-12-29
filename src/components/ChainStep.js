import React, { PureComponent, PropTypes } from 'react';
import Wrapper from './Wrapper';


class ChainStep extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {wrapperDescription: false};
  }

  hoverWrapper() {
    this.setState({ wrapperDescription: !this.state.wrapperDescription });
  }

  render() {
    const { target, handler, chain, wrapper } = this.props;
    return (

      <div
        style={{
          display: 'inline-block',
          marginLeft: 10,
          padding: 10,
          verticalAlign: 'middle',
          backgroundColor: '#c0c0c0',
        }}
      >
        {target && <h4>target: {target}</h4>}

        {chain && <p>chain: {chain}</p>}
        {handler && <p>handler: {handler}</p>}
        {wrapper && <a onClick={() => {this.hoverWrapper()}} >wrapper</a>}
        {this.state.wrapperDescription && <Wrapper wrapper={wrapper} />}
      </div>

    );
  }
}

ChainStep.propTypes = {
  target: PropTypes.string.isRequired,
  handler: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  wrapper: PropTypes.shape.isRequired
};

export default ChainStep;
