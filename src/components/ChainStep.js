import React, { PureComponent, PropTypes } from 'react';
import Wrapper from './Wrapper';
import AddChainButton from './AddChainButton';


class ChainStep extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {wrapperDescription: false};
  }

  hoverWrapper() {
    this.setState({ wrapperDescription: !this.state.wrapperDescription });
  }

  render() {
    const { target, handler, chain, falseChain, trueChain, wrapper, editMode } = this.props;
    return (
      <div
        style={{
          display: 'inline-block',
          padding: 10,
          verticalAlign: 'middle',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: 10,
            borderRadius: 15,
            backgroundColor: '#c0c0c0',
            verticalAlign: 'middle',
          }}
        >
          {editMode && <span>
            <a style={{color: "red", marginRight: 8,}}>Delete</a>
            <a style={{color: "yellow",}}>Edit</a>
          </span>}
          {target && <h4>target: {target}</h4>}

          {chain && <p>chain: {chain}</p>}
          {falseChain && <p>falseChain: {falseChain}</p>}
          {trueChain && <p>trueChain: {trueChain}</p>}
          {handler && <p>handler: {handler}</p>}
          {wrapper && <a onClick={() => {this.hoverWrapper()}} >wrapper</a>}
          {this.state.wrapperDescription && <Wrapper wrapper={wrapper} />}
        </div>
        {editMode && <AddChainButton />}
      </div>
    );
  }
}

ChainStep.propTypes = {
  target: PropTypes.string.isRequired,
  handler: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  falseChain: PropTypes.string.isRequired,
  trueChain: PropTypes.string.isRequired,
  wrapper: PropTypes.shape.isRequired
};

export default ChainStep;
