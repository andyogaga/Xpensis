import { UPDATE_INCOME, REMOVE_INCOME, ADD_INCOME, SET_TOTAL } from '../../utils/constants/redux';

const InitialState = [];
const Init = 0;

export const IncomeList = (state = InitialState, action) => {
  switch (action.type) {

    case REMOVE_INCOME:
      return [...state, ];

    case ADD_INCOME:
      return [ ...state, action.payload ]

    default:
      return state
  }
}

export const Total = (state = Init, action) => {
  switch (action.type) {

    case SET_TOTAL: 
    return state;
  }
}

