import React from 'react';
import styles from './Column.scss';
import Icon from './Icon.js';
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
  }


  state = {
    cards: this.props.cards || [],
  }
  addCards(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title
          }
        ]
      }
    ));
  }
  render() {
    const title = this.props.title; //use in JSX only title
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
        <span className={styles.icon}>
          <Icon name ={this.props.name}/>
          </span>
          </h3>
        <div>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCards(title)} />
        </div>
      </section>
    )
  }
}

export default Column;
