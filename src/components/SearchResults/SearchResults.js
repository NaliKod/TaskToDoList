import React from 'react';
import styles from './SearchResults.scss';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';


class SearchResults extends React.Component {
  
    static propTypes = {
      //title: PropTypes.node.isRequired,
      description: PropTypes.node,
      cards: PropTypes.array,
      image: PropTypes.string,
      name: PropTypes.string,
      addCard: PropTypes.func,
      //icon: PropTypes.node,
    }
  
    state = {
      cards: this.props.cards || [],
    }
  
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
    
    render() {
      //const { title, cards, icon} = this.props;
      const { cards} = this.props;
      return (
        <section className={styles.component}>
          {/* <h3 className={styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
      </h3>*/}
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      );
    }
}
  
export default SearchResults;