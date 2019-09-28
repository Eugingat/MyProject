import Component from '../../../views/component.js';

import Questions from '../../../models/Questions.js';

import CrossAnimation from '../../../models/CrossAnimation.js';

class Result extends Component {
    constructor() {
        super();

        this.model = new Questions();
    }

    getData() {
        return new Promise(resolve => this.model.getAnswer().then(answer => resolve(answer)));

    }

    render(answer) {
        return new Promise(resolve => {
            let htmlPage;
            let answerTrueCount = answer.filter(item => item.answer === true),
                countTrue = answerTrueCount.length;

            htmlPage = `
				<h1 class="page-title">Результат</h1>
				
				<div class="blockQuestion">
				    <div class="blockAnimation">
				        <div class="blockAnimation__myAnimation"></div>
                    </div>
					<p class="styleQuestioin">${countTrue} из 10 правильных </p>
				</div>
				    <a class="about__btn-start button button__btnResult" href="#" title="Click here to get started!">Вернуться на главную</a>"
				    
					`;
            resolve(htmlPage);
        });
    }

    afterRender() {
        this.getAnimation();
    }

    getAnimation() {
        let widthBlock = 0,
            backgrondAnimation =document.getElementsByClassName('blockAnimation__myAnimation')[0],
            id = setInterval(frame,10);

        this.count = new CrossAnimation();
        let countTrue = this.count.getCount();

        function frame() {
            if (widthBlock == countTrue || countTrue == 0) {
                clearInterval(id);
            } else {
                widthBlock++;
                backgrondAnimation.style.width = widthBlock +'px';
            }
        }
    }

}

export default Result;