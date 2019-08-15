import { UPDATE_EXPENSE, REMOVE_EXPENSE, ADD_EXPENSE } from '../../utils/constants/redux';

const InitialState = [];

export const ExpenseList = (state = InitialState, action) => {
  switch (action.type) {

    case REMOVE_EXPENSE:
      return [...state, ];

    case ADD_EXPENSE:
      return [ ...state, action.payload ]

    default:
      return state
  }
}

