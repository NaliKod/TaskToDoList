import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
  }
 
  render() {
    return (
      <section className={styles.component}/>
    )
  }
}

export default Card;
