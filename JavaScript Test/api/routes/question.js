const express = require('express'),
	router = express.Router(),
	config = require('config'),
	fs = require('file-system');


router.get('/api/Q/:id', (req, res) => {
	const data = getDatafromQuestion(),
		question = data.find(question => question.id === req.params.id);

	question ? res.send(question) : res.send({});
});

router.put('/api/Q/:id', (req, res) => {
	const data = getDatafromQuestion(),
		quest = data.find(quest => quest.id === req.params.id),
		updatedAnswer = req.body;

	quest.answer = updatedAnswer.answer;

	setAnswerToDB(data);

	res.sendStatus(204);
});

router.get('/api/Answer', (req, res) => {
	const data = getDatafromQuestion(),
		Answer = data.filter(answer => answer.answer);

	Answer ? res.send(Answer) : res.send({});
});

function getDatafromQuestion() {
    return JSON.parse(fs.readFileSync(config.get('jsonInfo'), 'utf8'));
}

function setAnswerToDB(data) {
	fs.writeFileSync(config.get('jsonInfo'), JSON.stringify(data));
}


module.exports = router;