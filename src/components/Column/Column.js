import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = { //use in JSX this.props.tilte
    title: PropTypes.node.string,
  }
  render() {
    //const title = this.props.title; //use in JSX only title
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}

export default Column;
