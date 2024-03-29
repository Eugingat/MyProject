import Component from '../../views/component.js';

class Footer extends Component {
    render() {
        return new Promise(resolve => {
            resolve(`
                <footer>                   
                    <p class="footer__info">
                        &copy; All Rights Reserved, 2019
                    </p>                  
                </footer>
            `);
        });
    }
}

export default Footer;