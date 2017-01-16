import React, { PureComponent, PropTypes } from 'react';
import Wrapper from './Wrapper';
import AddChainButton from './AddChainButton';


const defaultViewer = (key, value) => {
  return (
    <p key={key}>{key}:{value}</p>
  );
}

const targetViewer = (key, value) => {
  return (
    <h4 key={key}>{key}: {value}</h4>
  );
}

const wrapperViewer = (key, value, context) => {
    //console.log(context);// replace by bind
    let fields = [];
    for (let fieldKey in value) {
      fields[fields.length] = {key: fieldKey, value: value[fieldKey]}
    }
    return (
      <div>
        <a onClick={() => {context.hoverWrapper()}} >wrapper</a> {context.state.wrapperDescription && <Wrapper fields={fields} />}
      </div>
    );
}

const newViewer = (key, value) => {
    let fields = [];
    for (let fieldKey in value) {
      fields[fields.length] = {key: fieldKey, value: value[fieldKey]}
    }
    return (
      <div>
        new:
        {fields.map((field) =>
          <div>
            {field.key}: {field.value}
          </div>
        )}
      </div>
    );
}

const someViewers = {
  default: defaultViewer,
  target: targetViewer,
  wrapper: wrapperViewer,
  new: newViewer,
};

class ChainStep extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {wrapperDescription: false};
  }

  hoverWrapper() {
    this.setState({ wrapperDescription: !this.state.wrapperDescription });
  }

  onDeleteClick(chainId, stepId) {
    console.log(chainId, stepId);
  }

  selectViewer(someViewers, key, value) {
    try {
      return someViewers[key](key, value, this);
    } catch (err) {
      return someViewers.default(key, value, this);
    }
  }

  isNotInExceptions(key, exceptions) {
    for (let index = 0; index < exceptions.length; index+=1) {
      if (key === exceptions[index]) return false;
    }; 
    return true;
  }

  universalViewer() {
    let fields = [];
    const exceptions = ['chainId', 'stepId', 'editMode', 'onDeleteStepClick']; // will do with this something in the future
    for (let key in this.props) {
      if (this.isNotInExceptions(key, exceptions)) {
        fields[fields.length] = {key: key, value: this.props[key]}
      }
    }
    return (
      <div>
        {fields.map(field =>
          this.selectViewer(someViewers, field.key, field.value)
        )}
      </div>
    );
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
            <a style={{color: "red", marginRight: 8,}} onClick={() => this.props.onDeleteStepClick(this.props.chainId, this.props.stepId)}>Delete</a>
            <a style={{color: "yellow",}}>Edit</a>
          </span>}

          {this.universalViewer()}
        </div>
        {editMode && <AddChainButton />}
      </div>
    );
  }
}

ChainStep.propTypes = {
  chainId: PropTypes.string.isRequired,
  stepId: PropTypes.number.isRequired,
  target: PropTypes.string.isRequired,
  handler: PropTypes.string.isRequired,
  chain: PropTypes.string.isRequired,
  falseChain: PropTypes.string.isRequired,
  trueChain: PropTypes.string.isRequired,
  wrapper: PropTypes.shape.isRequired
};

export default ChainStep;
