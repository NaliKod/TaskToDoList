import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const phrase = props.match.params.phrase;
  const filteredCards = state.cards.filter(card => card.title == phrase);
  const cardParams = filteredCards[0] || {};

  return {
    ...cardParams,
    cards: getCardsForSearchResults(state, phrase),
  };
};

export default connect(mapStateToProps)(SearchResults);