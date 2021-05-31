import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';

class Column extends React.Component {
  //static propTypes = { //use in JSX this.props.tilte
  //title: PropTypes.node.string,
  //}
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    cards: PropTypes.array,
    image: PropTypes.string,
    name: PropTypes.string,
    addCard: PropTypes.func,
    icon: PropTypes.node,
  }

  state = {
    cards: this.props.cards || [],
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  
  render() {
    const { title, cards, icon, addCard } = this.props; //use in JSX only title
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
