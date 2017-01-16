import React, { PureComponent, PropTypes } from 'react';
import SubWrapper from './SubWrapper';


class Wrapper extends PureComponent {
  constructor(props) {
    super(props);
  }

  viewSubWrapper(value) {
    if (Array.isArray(value)) {
      if (Array.isArray(value[0])) {
        return (
          <SubWrapper value={value[0]} />
        )
      }
      return (
        <SubWrapper value={value} />
      )
    }
    return (
      <p>{value}</p>
    );
  }

  render() {
    return (
      <div>
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
