import React from 'react';
import styles from './Column.scss';
import Icon from './Icon.js';
import PropTypes from 'prop-types';
//import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';

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
  }

  state = {
    cards: this.props.cards || [],
  }

  /*addCards(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
          },
        ],
      }
    ));
  }
*/

  render() {
    const { title, cards, icon } = this.props; //use in JSX only title
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
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCards(title)} />
        </div>*/}
      </section>
    );
  }
}

export default Column;
