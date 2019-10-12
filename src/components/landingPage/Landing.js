// Libs
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// actions
import * as actionCreators from "../../redux/actionCreators/creators";

const CenteredDivOverlay = styled.div`
	background: rgba(21, 23, 28, 0.5);
	height: 100%;
	width: 100%;
	font-family: "Zeyada", cursive;
	font-size: 8.33em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #edebdd;
`;

export function Landing({ getNewPhotoQuote, photo, quote }) {
	useEffect(() => {
		getNewPhotoQuote();
	}, [getNewPhotoQuote]);

	const bodyEl = document.getElementById("root");
	bodyEl.onclick = () => getNewPhotoQuote();

	const CenteredDiv = styled.div`
		background-image: url(${photo});
		background-repeat: no-repeat;
		background-size: cover;
		margin: 5rem;
		height: 85vh;
		width: 50vw;
	`;

	return (
		<CenteredDiv>
			<CenteredDivOverlay>
				<h1>{quote.message}</h1>
				<h2>{quote.subtitle}</h2>
			</CenteredDivOverlay>
		</CenteredDiv>
	);
}
const mapStateToProps = state => {
	return state.newPair;
};

const mapDispatchToProps = dispatch => {
	return {
		getNewPhotoQuote: () => dispatch(actionCreators.getNewPhotoQuote())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);

// connect(state,dispatch)(component) : state.newPair


