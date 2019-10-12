// Libs
import axios from "axios";

//header for req
import {header} from '../keyHeader';
// Action Types
import * as types from "../actionTypes/types";

export const testing = item => {
	return {
		type: types.TEST,
		payload: item
	};
};

export const generateNew = data => {
	return {
		type: types.GENERATE,
		payload: {
			photo: data.photo,
			quote: {
				message: data.quote,
				subtitle: data.quote
			}
		}
	};
};

const apiRandomArray = [
	"asshole",
	"bag",
	"because",
	"bucket",
	"bye",
	"cool",
	"cup",
	"diabetes",
	"everyone",
	"everything",
	"family",
	"fascinating",
	"flying",
	"ftfy",
	"fyyff",
	"give",
	"horse",
	"immensity",
	"logs",
	"looking",
	"maybe",
	"no",
	"question",
	"ratsarse",
	"retard",
	"ridiculous",
	"rtfm",
	"sake",
	"shit",
	"single",
	"that",
	"this",
	"what",
	"zayn",
	"zero"
];


export const getNewPhotoQuote = () => dispatch => {

	let random = "";
	const randomIndex = Math.floor(Math.random() * (35 - 1 + 1) + 1);
	random = apiRandomArray[randomIndex];
	
	const randomPhotoAPI = "https://api.unsplash.com/photos/random/";
	const randomQuoteAPI = `https://foaas.com/${random}/yours%20truly`;


	const photoPromise = axios.get(randomPhotoAPI, {headers: header});
	const quotePromise = axios.get(randomQuoteAPI);

	Promise.all([photoPromise, quotePromise])
	.then(([photoRes, quoteRes]) => {
		const photoData = photoRes.data;
		const quoteData = quoteRes.data;
		dispatch({
				type: types.GENERATE,
				payload: {
					photo: photoData.urls.small,
					quote: {
						message: quoteData.message,
						subtitle: quoteData.subtitle
					}
				}
			}
		);
	});
};
