import React from "react";
import styled from "styled-components";
import closeIcon from "../../icons/closeIcon.png";

const InfoBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #2979ff;
	border-radius: 4px 4px 0 0;
	height: 60px;
	width: 100%;

	.leftInnerContainer {
		flex: 0.8;
		display: flex;
		align-items: center;
		margin-left: 5%;
		color: white;
	}

	.rightInnerContainer {
		display: flex;
		flex: 0.2;
		justify-content: flex-end;
		margin-right: 5%;
	}
`;

export const InfoBar = ({ appName }) => {
	return (
		<InfoBarContainer className="infoBar">
			<div className="leftInnerContainer">
				<h4>Conversation with {appName}</h4>
			</div>
			<div className="rightInnerContainer">
				<a href="/">
					<img src={closeIcon} alt="close icon" />
				</a>
			</div>
		</InfoBarContainer>
	);
};
