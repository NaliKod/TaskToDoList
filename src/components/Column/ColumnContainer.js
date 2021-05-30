import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForColumn } from '../../redux/cardsRedux';
import { createActionAddCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});
//export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);