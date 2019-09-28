import Component from '../../../views/component.js';

class InfoBlock extends Component {
    constructor() {
        super();
    }

    render() {
        return new Promise(resolve => {
            resolve(`
             <div class="background"></div>
             <div class="info">
                <a class="close" href="/#">X</a>
                <p class="info__text"> Доброго дня! <br> 
                 Этот тест проверит ваши знания по JavaScripty. <br>
                 JavaScript - предназначен для написания сценариев для активных HTML-страниц. Язык JavaScript не имеет никакого отношения к языку Java. 
                 Java разработан фирмой SUN. JavaScript - фирмой Netscape Communication Corporation. Первоначальное название - LiveScript. 
                 После завоевания языком Java всемирной известности LiveScript из коммерческих соображений переименовали в JavaScript
                 </p>
             </div>
            `);
        });
    }


}

export default InfoBlock;