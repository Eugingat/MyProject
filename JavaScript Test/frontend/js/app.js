import '../styles/app';

import Utils from './helpers/utils';

import Header from './views/partials/header';
import Footer from './views/partials/footer';

import About from './views/pages/about';
import Error404 from './views/pages/error404';

import Question from './views/pages/tasks/question';

import InfoBlock from './views/pages/tasks/infoBlock';
import Result from './views/pages/tasks/resultTest';

const Routes = {
    '/': About,
    '/infoBlock':InfoBlock,
    '/Q/:id':Question,
    '/Answer':Result
};

function router() {
    const headerContainer = document.getElementsByClassName('header-container')[0],
        contentContainer = document.getElementsByClassName('content-container')[0],
        footerContainer = document.getElementsByClassName('footer-container')[0],
        header = new Header(),
        footer = new Footer();

    header.render().then(html => {
        headerContainer.innerHTML = html;
    });

    const request = Utils.parseRequestURL(),
        parsedURL = `/${request.resource || ''}${request.id ? '/:id' : ''}${request.action ? `/${request.action}` : ''}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

    page.getData().then(data => {
        page.render(data).then(html => {
            contentContainer.innerHTML = html;
            page.afterRender();
        });
    });

    footer.render().then(html => {
        footerContainer.innerHTML = html;
    });
}

module.hot ? module.hot.accept(router()) : window.addEventListener('load', router);
window.addEventListener('hashchange', router);