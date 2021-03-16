const { NlpManager } = require("node-nlp");
const manager = new NlpManager();
const corpusJson = require("./corpus-en.json");
const { dockStart } = require("@nlpjs/basic");
let nlp;

// 1 - Train the IA
async function trainChatBotIA() {
	return new Promise(async (resolve, reject) => {
		// Adds the utterances and intents for the NLP
		// // Train also the NLG
		const dock = await dockStart({ use: ["Basic"] });
		nlp = dock.get("nlp");
		await nlp.addCorpus(corpusJson);
		await nlp.train();
		console.log("AI has been trained");
		resolve(true);
	});
}

async function generateResponseAI(qsm) {
	// Train and save the mode
	return new Promise(async (resolve, reject) => {
		response = await nlp.process("en", qsm);
		resolve(response);
	});
}

const connectWebSocket = (io) => {
	io.on("connection", (socket) => {
		socket.on("join", (room) => {
			socket.join(room);
			console.log("New user joined!");
			socket.emit("send-msg-response", {
				user: "A",
				message: `Hi I'm Zeus Bot. How can I help you?`,
				options: [],
			});
		});

		socket.on("new-msg", async function (data) {
			let response = await generateResponseAI(data.message);
			io.to(data.room).emit(
				"send-msg-response",
				response.answer !== undefined
					? {
							user: "A",
							message: response.answer,
							options: [],
					  }
					: {
							user: "A",
							message: "I am sorry, I don't understand :( ",
							options: [],
					  }
			);
		});
	});
};

module.exports = {
	connectWebSocket,
	trainChatBotIA,
};
