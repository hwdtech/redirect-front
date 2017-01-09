import React, { PureComponent, PropTypes } from 'react';
import ChainStep from './ChainStep';
import AddChainButton from './AddChainButton';


class Chain extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { visible: false, editMode: false };
  }

  hoverVisible() {
    this.setState({ visible: !this.state.visible });
  }

  hoverEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    const { id, exeptional, steps, externalAccess } = this.props;
    return (
      <li>
        <h3> <a onClick={() => {this.hoverVisible()}}> {id} </a> </h3>
        {this.state.visible && <span>
          <a 
            style={{color: "red", marginRight: 8,}}
          >
            Delete
          </a>
          <a 
            style={{color: "silver", marginRight: 8,}}
            onClick={() => {this.hoverEditMode()}}
          >
            Edit
          </a>
        </span>}
        {this.state.visible && <div>
          {this.state.editMode && <AddChainButton />}
          {steps.map((step, index) =>
            <ChainStep
              key={index}
              {...step}
              editMode={this.state.editMode}
            />
          )}
        </div>}
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