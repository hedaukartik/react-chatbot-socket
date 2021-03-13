const { NlpManager } = require("node-nlp");
const manager = new NlpManager();
const corpusJson = require("./corpus-en.json");

// 1 - Train the IA
async function trainChatBotIA() {
	return new Promise(async (resolve, reject) => {
		// Adds the utterances and intents for the NLP
		// // Train also the NLG
		await manager.addCorpus(corpusJson);
		await manager.train();
		manager.save();
		console.log("AI has been trained");
		resolve(true);
	});
}

async function generateResponseAI(qsm) {
	// Train and save the mode
	return new Promise(async (resolve, reject) => {
		response = await manager.process("en", qsm);
		resolve(response);
	});
}

const connectWebSocket = (io) => {
	io.on("connection", function (socket) {
		socket.on("join", (userId) => {
			socket.join(userId);
			console.log("New user joined!");
		});

		socket.on("new-msg", async function (data) {
			let response = await generateResponseAI(data.msg);
			io.to(data.room).emit(
				"send-msg-response",
				response.answer !== undefined
					? response.answer
					: "I am sorry, I don't understand :( "
			);
		});
	});
};

module.exports = {
	connectWebSocket,
	trainChatBotIA,
};
