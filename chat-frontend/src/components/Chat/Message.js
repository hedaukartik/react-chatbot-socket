import React, { useState } from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
	display: flex;
	padding: 0 5%;
	margin-top: 3px;
	justify-content: ${(props) =>
		props.content === "flex-start" ? "flex-start" : "flex-end"};
	.messageBox {
		background: #f3f3f3;
		border-radius: 20px;
		padding: 5px 20px;
		color: white;
		display: inline-block;
		max-width: 80%;
	}

	.messageText {
		width: 100%;
		letter-spacing: 0;
		float: left;
		font-size: 1.1em;
		word-wrap: break-word;
	}

	.messageText img {
		vertical-align: middle;
	}

	.sentText {
		display: flex;
		align-items: center;
		font-family: Helvetica;
		color: #828282;
		letter-spacing: 0.3px;
	}

	.pl-10 {
		padding-left: 10px;
	}

	.pr-10 {
		padding-right: 10px;
	}

	.colorWhite {
		color: white;
	}

	.colorDark {
		color: #353535;
	}

	.backgroundBlue {
		background: #2979ff;
	}

	.backgroundLight {
		background: #f3f3f3;
	}
`;

export const Message = ({ message: { user, text }, name }) => {
	const [isSentByCurrentUser, setIsSentByCurrentUser] = useState(false);

	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		setIsSentByCurrentUser(true);
	}

	return isSentByCurrentUser ? (
		<MessageContainer content="flex-start">
			<p className="sentText pr-10">{trimmedName}</p>
			<div className="messageBox backgroundBlue">
				<p className="messageText colorWhite">{text}</p>
			</div>
		</MessageContainer>
	) : (
		<MessageContainer content="flex-end">
			<div className="messageBox backgroundLight">
				<p className="messageText colorDark">{text}</p>
			</div>
			<p className="sentText pl-10">{user}</p>
		</MessageContainer>
	);
};
