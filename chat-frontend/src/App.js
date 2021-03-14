import React, { useState } from "react";
import logo from "./HappyPandaFace.svg";
import ButtonIcon from "./HappyPandaFace.svg";
import "./App.css";
import { Chat } from "./components/Chat/Chat";

function App() {
	const [showChatbot, toggleChatbot] = useState(false);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Hey, what's up? I'm Zeus. I am here you help you out
					anytime.
				</p>
			</header>
			<div className="app-chatbot-container">
				{showChatbot ? <Chat /> : null}
			</div>
			<button
				className="app-chatbot-button"
				onClick={() => toggleChatbot((prev) => !prev)}
			>
				Open
			</button>
		</div>
	);
}

export default App;
