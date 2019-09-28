import Component from '../../../views/component';

import Questions from '../../../models/Questions';
import RedirectTo from '../../../models/RedirectTo';


class Question extends Component {

    constructor() {
        super();

        this.model = new Questions();
    }

    getData() {
        return new Promise(resolve => this.model.getQuestion(this.request.id).then(question => resolve(question)));

    }

    render(question) {
        return new Promise(resolve => {
            let htmlPage;
            const {Quest, id, answers} = question;

            htmlPage = `
				<h1 class="page-title">Вопрос №${id}</h1>
				
				<div class="blockQuestion">
					<p class="styleQuestioin">${Quest}</p>
				</div>
				
				<div class="blockAnswer">
					${answers}
					</div>`;
            resolve(htmlPage);
        });
    }

    afterRender() {
        this.getAnswer();
    }

    getAnswer() {
        const questionsBlock = document.getElementsByClassName('blockAnswer')[0],
            sendAnswer = document.getElementsByTagName('a')[0];

        sendAnswer.addEventListener('click', this.sendAnswer);
        questionsBlock.addEventListener('click', event => {
            const target = event.target;

            if (target.tagName != 'INPUT') return;

            switch (false) {
                case target.classList.contains('checked'):
                    this.sendChecked(target);
                    break;

                default:
                    this.removeChecked(target);

            }


        });

    }

    sendChecked(input) {
        input.classList.add('checked');

    }

    removeChecked(input) {
        input.classList.remove('checked');
    }

    sendAnswer() {
        event.preventDefault();
        switch (document.getElementsByClassName('checked').length) {
            case 1:
                // eslint-disable-next-line no-case-declarations
                const url = location.hash.slice(2),
                    request = {};

                [request.resource, request.id, request.action] = url.split('/');

                // eslint-disable-next-line no-case-declarations
                let inputAnswer = document.getElementsByClassName('checked')[0],
                    objAnswer = JSON.parse(inputAnswer.dataset.answer),
                    updatedAnswer = {answer: objAnswer},
                    id = request.id;

                this.model = new Questions();
                this.redirectTo = new RedirectTo();

                this.model.correctAnswer(updatedAnswer, id).then(()=> this.redirectTo.redirect());
                break;
            case 0:
                // eslint-disable-next-line no-case-declarations
                const urlForNull = location.hash.slice(2),
                    requestForNull = {};

                [requestForNull.resource, requestForNull.id, requestForNull.action] = urlForNull.split('/');

                this.redirectTo = new RedirectTo();
                this.model = new Questions();
                // eslint-disable-next-line no-case-declarations
                let updatedAnswerNull = {answer: false},
                    idForNull = requestForNull.id;
                this.model.correctAnswer(updatedAnswerNull, idForNull).then(()=> this.redirectTo.redirect());
                break;

            default:
                // eslint-disable-next-line no-case-declarations
                const urlforFalse = location.hash.slice(2),
                    requestForFalse = {};

                [requestForFalse.resource, requestForFalse.id, requestForFalse.action] = urlforFalse.split('/');

                this.redirectTo = new RedirectTo();
                this.model = new Questions();
                // eslint-disable-next-line no-case-declarations
                let updatedAnswerFalse = {answer: false},
                    idForFalse = requestForFalse.id;
                this.model.correctAnswer(updatedAnswerFalse, idForFalse).then(()=> this.redirectTo.redirect());
        }
    }

}

export default Question;