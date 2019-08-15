import { combineReducers, createStore } from "redux";
import {IncomeList, Total} from "./reducers/income.reducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { ExpenseList } from './reducers/expense.reducer';
 
const persistConfig = {
  key: 'v001',
  storage,
}

// Combining the different Reducers
const combinedReducers = combineReducers({
  incomeList: IncomeList,
  expenseList: ExpenseList,
  // total: Total
});

//Adding the combinedReducer to the Persisted Reducer
const persistedReducer = persistReducer(persistConfig, combinedReducers)

export default createStore(persistedReducer);