import React, { PureComponent, PropTypes } from 'react';
import Wrapper from './Wrapper';
import AddChainButton from './AddChainButton';


const defaultViewer = (key, value, context) => {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <p>{key}:
        {context.state.editStepMode && <input value={value} />}
        {!context.state.editStepMode && value}
      </p>
    </div>
  );
}

const targetViewer = (key, value, context) => {
  const targets = [`${value}(edit)`, 'call_this_chain_receiver', 'getAsyncOpsActor', 'other']
  if (context.state.editStepMode) {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <h4 key={key}>{key}:</h4>
          <select
            onChange={(e) => {
              console.log('target: ',e.target.value)
              context.setState({current: {target: e.target.value}})}
            }
          >
            {targets.map((target, index) => 
              <option value={index}>{target}</option>
            )}
          </select>
      </div>
    );
  }
  return (
    <h4 key={key}>{key}: {value}</h4>
  );
}

const handlerViewer = (key, value, context) => {
  return (
    <p key={key}>{key}:{value}</p>
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

const newViewer = (key, value, context) => {
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

const keyViewer = (key, value, context) => {
  return (
    <p key={key}>key:{value}</p>
  );
}

const someViewers = {
  default: defaultViewer,
  target: targetViewer,
  handler: handlerViewer,
  wrapper: wrapperViewer,
  new: newViewer,
  chainKey: keyViewer,
};

class ChainStep extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      wrapperDescription: false, 
      editStepMode: false, 
      current: {target: 0},
      fields: this.throwStep(props),
    };
  }

  hoverWrapper() {
    this.setState({ wrapperDescription: !this.state.wrapperDescription });
  }

  throwStep(props) {
    let fields = [];
    const exceptions = ['chainId', 'stepId', 'editMode', 'onDeleteStepClick', 'reset']; // will do with this something in the future
    for (let key in props) {
      if (this.isNotInExceptions(key, exceptions)) {
        fields[fields.length] = {key: key, value: this.props[key]}
      }
    }
    return fields;
  }

  onDeleteClick(chainId, stepId) {
    console.log(chainId, stepId);
  }

  onEditClick() {
    this.setState({ editStepMode: !this.state.editStepMode });
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
    return (
      <div>
        {this.state.fields.map(field =>
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
            <a
              style={{color: "red", marginRight: 8,}}
              onClick={() => this.props.onDeleteStepClick(this.props.chainId, this.props.stepId)}
            >
              Delete
            </a>
            {!this.state.editStepMode && <a
              style={{color: "yellow",}}
              onClick={() => this.onEditClick()}
            >
              Edit
            </a>}
            {this.state.editStepMode && <a
              style={{color: "green",}}
              onClick={() => this.onEditClick()}
            >
              Save
            </a>}
            {this.state.editStepMode && <a
              style={{color: "orange",}}
              onClick={() => this.onEditClick()}
            >
              Cancel
            </a>}
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
