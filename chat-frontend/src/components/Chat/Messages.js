import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import styled from "styled-components";
import { Message } from "./Message";

const MessagesContainer = styled.div`
	.messages {
		padding: 5% 0;
		overflow: auto;
		flex: auto;
	}
`;

export const Messages = ({ messages, name }) => (
	<MessagesContainer>
		<ScrollToBottom className="messages">
			{messages.map((message, i) => (
				<div key={i}>
					<Message message={message} name={name} />
				</div>
			))}
		</ScrollToBottom>
	</MessagesContainer>
);
