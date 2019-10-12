// Libs
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Components
import * as reducers from "../reducers/reducer";

const CombinedReducers = combineReducers({
	test: reducers.testReducer,
	newPair: reducers.generatePairReducer,
});

const Store = createStore(
	CombinedReducers,
	{},
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);
export default Store;
