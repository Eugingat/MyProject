import Component from '../../views/component.js';

class About extends Component {

    render() {
        return new Promise(resolve => {
            resolve(`
    <div class="main">
        <h1 class="page-title">Добро пожаловать!</h1>   
        <p class="about__info">Вы находитесь на главной странице теста по JavaScript.<br> Удачи в тесте!</p>
        
        <div class="divFlex">
            <a class="about__btn-start button button__starBtn" href="#/Q/1" title="Click here to get started!">Начать тест</a>
            <a class="about__btn-start button button__starBtn" href="#/infoBlock" title="Click here to get started!">Информация</a> 
        </div>
    </div>   
            `);
        });
    }

}

export default About;