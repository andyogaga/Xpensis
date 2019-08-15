import { ADD_EXPENSE, UPDATE_EXPENSE, REMOVE_EXPENSE } from './../../utils/constants/redux';


export const addExpense = payload => ({
  type: ADD_EXPENSE,
  payload
});

export const updateExpense = payload => ({
  type: UPDATE_EXPENSE,
  payload
});

export const removeExpense = payload => ({
  type: REMOVE_EXPENSE,
  payload
});

export const setTotal = payload => ({
  type: SET_TOTAL,
  payload
})