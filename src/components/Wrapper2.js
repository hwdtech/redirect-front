import React, { PureComponent, PropTypes } from 'react';


class Wrapper extends PureComponent {
  constructor(props) {
    super(props);
  }

  viewSubWrapper(value) {
    if (Array.isArray(value)) {
      if (Array.isArray(value[0])) {
        return (
          <p>
            {value[0].map((item) =>
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
      return (
        <p>
          {value.map((item) =>
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
              </div>
              <div>
                name: {item.name}
              </div>
            </div>
          )}
        </p>
      )
    }
    return (
      <p>{value}</p>
    );
  }

  render() {
    return (
      <div>
        {console.log(this.props.fields)}
        {this.props.fields.map((field) => 
          <div key={field.key}>
            {field.key}: {this.viewSubWrapper(field.value)}
          </div>
        )}
      </div>
    );
  }
}

export default Wrapper;
