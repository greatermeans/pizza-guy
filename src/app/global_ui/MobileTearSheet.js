import React, { Component, PropTypes } from 'react'

export default class MobileTearSheet extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const styles = {
      root: {
        marginBottom: 24,
        marginRight: 24,
        maxWidth: 240,
        width: '100%',
        flex: 2,
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: '100%',
        overflowY: 'auto',
      },
      bottomTear: {
        display: 'block',
        position: 'relative',
        marginTop: -10,
        maxWidth: 360,
      },
    }

    return (
      <div style={styles.root}>
        <div style={styles.container}>
          {this.props.children}
        </div>
        <img style={styles.bottomTear} src="images/bottom-tear.svg" />
      </div>
    )
  }
}
