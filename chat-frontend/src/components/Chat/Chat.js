import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { InfoBar } from "./InfoBar";
import { Messages } from "./Messages";
import { Input } from "./Input";

const ChatContainer = styled.div``;

let socket;

export const Chat = () => {
	const [room, setRoom] = useState(uuid());
	const [name, setName] = useState("X");
	const appName = "Zeus";
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const ENDPOINT = process.env.REACT_APP_API_URL;

	useEffect(() => {
		console.log(ENDPOINT);
		socket = io(ENDPOINT);
		socket.emit("join", room, (error) => {
			if (error) {
				alert(error);
			}
		});
	}, [ENDPOINT]);

	useEffect(() => {
		socket.on("send-msg-response", (message) => {
			setMessages((msgs) => [...msgs, message]);
		});
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		console.log(message);
		const data = {
			message: message,
			room: room,
			options: [],
			user: name,
		};

		setMessages((msgs) => [...msgs, data]);
		if (message) {
			socket.emit("new-msg", data, () => {
				setMessage("");
			});
		}
	};
	return (
		<ChatContainer>
			<div className="container">
				<InfoBar appName={appName} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</ChatContainer>
	);
};
