import React, { PureComponent, PropTypes } from 'react';


class ChainStepEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { targetIndex: 0, current: this.setCurrent(0), currentHandler: [] };
  }

  setCurrent(index) {
    return this.props.targets[index][Object.keys(this.props.targets[index])];
  }

  setCurrentHandler(index) {
    const temp = this.state.current.handler[index];
    this.setState({currentHandler: temp[Object.keys(temp)[0]].wrapper});
  }

  handleChange(event) {
    this.setState({ targetIndex: event.target.value });
    this.setState({ current: this.setCurrent(event.target.value) });
    if (this.setCurrent(event.target.value).handler) {
      const temp = this.setCurrent(event.target.value).handler[0];
      this.setState({ currentHandler: temp[Object.keys(temp)[0]].wrapper });
    }
  }

  render() {
    const { targets } = this.props;

    return (
        <div
          style={{
            display: 'inline-block',
            padding: 10,
            borderRadius: 15,
            backgroundColor: '#c0c0c0',
            verticalAlign: 'middle',
          }}
        >
          <div>
            <span>
              <a style={{color: "red", marginRight: 8,}}>Cansel</a>
              <a style={{color: "yellow",}}>Save</a>
            </span>
          </div>
          <div style={{display: 'flex', marginRight: 8,}}>
            <h4>target</h4>
            <select onChange={(e) => {this.handleChange(e)}}>
                {targets.map((target, index) => 
                  <option value={index}>{Object.keys(target)[0]}</option>
                )}
            </select>
          </div>

          {this.state.current["chain"] && <div style={{display: 'flex', marginRight: 8,}}>
            <h4>chain</h4>
            <select>
            {this.state.current["chain"].map( value =>
              <option value={value}>{value}</option>
            )}
            </select>
          </div>}
          
          {this.state.current["handler"] && <div style={{display: 'flex', marginRight: 8,}}>
            <h4>handler</h4>

            <select onChange={(e) => { this.setCurrentHandler(e.target.value) }}>
            {this.state.current["handler"].map((value, index) =>
              <option value={index}>{Object.keys(value)[0]}</option>
            )}
            </select>
          </div>}

          {this.state.current["handler"] && this.state.currentHandler && <div>
            <h4>wrapper:</h4>
            {this.state.currentHandler.map((value, index) =>
              <div style={{display: 'flex', marginRight: 8,}}>
                <p>{value}</p>
                <input/>
              </div>
            )}
          </div>}

        </div>
    );
  }
}

ChainStepEditor.propTypes = {
  targets: PropTypes.array.isRequired,
};

export default ChainStepEditor;
