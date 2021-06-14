import React from 'react';
import styles from './SearchResults.scss';
//import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';


class SearchResults extends React.Component {
  
    static propTypes = {
      cards: PropTypes.array,
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