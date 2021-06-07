import { string } from 'prop-types';
import shortid from 'shortid';

// selectors
export const getSearchString = ({searchString}) => searchString;
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards}, searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE = createActionName('CHANGE');

// action creators
searchString: string;
export const createAction_changeSearchString = payload =>  ({ payload: searchString, type: CHANGE });

// reducer
export default function reducer(statePart = '', action) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}