import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
	.form {
		display: flex;
		border-top: 2px solid #d3d3d3;
	}

	.input {
		border: none;
		border-radius: 0;
		padding: 5%;
		width: 80%;
		font-size: 1.2em;
	}

	input:focus,
	textarea:focus,
	select:focus {
		outline: none;
	}

	.sendButton {
		color: #fff;
		text-decoration: none;
		background: #2979ff;
		padding: 20px;
		display: inline-block;
		border: none;
		width: 20%;
	}
`;
export const Input = ({ message, setMessage, sendMessage }) => (
	<InputContainer>
		<form className="form">
			<input
				className="input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
			/>
			<button className="sendButton" onClick={(e) => sendMessage(e)}>
				<div>Send</div>
			</button>
		</form>
	</InputContainer>
);
