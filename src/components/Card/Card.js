import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
  }

  render() {
    const { title } = this.props;
    return (
      <section className={styles.component}><h5>{title}</h5></section>
    );
  }
}

export default Card;
