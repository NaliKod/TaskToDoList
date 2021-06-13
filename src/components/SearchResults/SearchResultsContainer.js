import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => {
  const phrase = props.match.params.phrase;
 
  return {
    cards: getCardsForSearchResults(state, phrase),
  };
};

export default connect(mapStateToProps)(SearchResults);