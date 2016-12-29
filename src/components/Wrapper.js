import React, { PureComponent, PropTypes } from 'react';


class Wrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {wrapper: this.objToArr()};
  }

  objToArr () {
    let index = 0;
    let wrapper = [];
    for (let key in this.props.wrapper) {
      wrapper[index] = [key, this.props.wrapper[key]];
      index += 1;
    }
    return wrapper;
  }

  render() {
    return (
      <div>
        {this.state.wrapper.map((action, index) => 
          <p key={index}>
            {action[0]}:{action[1]}
          </p>
        )}
      </div>
    );
  }
}

export default Wrapper;
