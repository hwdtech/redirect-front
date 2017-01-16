import React, { PureComponent, PropTypes } from 'react';


class SubWrapper extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p>
        {this.props.value.map((item) =>
          <div key={item.name}>
            <div>
              args: {item.args.map((arg) => 
                <div
                  style={{
                    marginLeft: 10,
                  }}
                  key={arg}
                >
                  {arg}
                </div>
              )}
              name: {item.name}
            </div>
          </div>
        )}
      </p>
    )
  }
}

export default SubWrapper;
