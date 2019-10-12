// Action Types
import * as types from "../actionTypes/types";

//Reducers

//test
const intialVal = {
	test: "wow"
};
export const testReducer = (state = intialVal, action) => {
	switch (action.type) {
		case types.TEST:
			return 'wow'=== action.payload ? { test: "bitch" } : {test:'wow'} ;
		default:
			return state;
	}
};

// photo and quote generator
const initalPair = { photo: {}, quote: {} };
export const generatePairReducer = (state = initalPair, action) => {
	switch (action.type) {
		case types.GENERATE:
			return {
				photo: action.payload.photo,
				quote: {
					message: action.payload.quote.message,
					subtitle: action.payload.quote.subtitle,
				}

			};
		default:
			return state;
	}
};
