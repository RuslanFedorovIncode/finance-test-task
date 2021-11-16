import { combineReducers, createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  thunkMiddleware  from "redux-thunk";
import CardReducer from './cards/CardReducer'

const reducers = combineReducers({
  CardReducer : CardReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));