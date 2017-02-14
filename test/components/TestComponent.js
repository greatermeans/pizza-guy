import React from 'react';

var TestComponent = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <p>hello world</p>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default TestComponent;
