// Libs
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

//Components
import Landing from "./components/landingPage/Landing";

// Actions
import * as actionCreators from "./redux/actionCreators/creators";

// Styles
import "./App.css";


const AppStyledOverlay = styled.div`
background: rgba(21, 23, 28, 0.75);
display: flex;
	justify-content: center;
	align-items: center;
`;

export function App() {


	return (
		<div>

			<AppStyledOverlay>
			<Route exact path='/' component={Landing} />
			</AppStyledOverlay>

			</div>
	);
}


export default connect(
	state => state,
	actionCreators
)(App);
