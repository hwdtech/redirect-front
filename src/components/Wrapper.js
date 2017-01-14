import React, { PureComponent, PropTypes } from 'react';


class Wrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { wrapper: this.objToArr() };
  }

  objToArr() {
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
          <div key={index}>
            {action[0]}:{(typeof(action[1]) !== 'object') && action[1]}
            {(typeof(action[1]) === 'object') && action[1][0].map((subaction) =>
              <div key={subaction.name}>
                ->{subaction.name}:{subaction.args.map(value => 
                  <div>->->{value},</div>
                )}
              </div>
            )}
          </div>,
        )}
      </div>
    );
  }
}

export default Wrapper;
