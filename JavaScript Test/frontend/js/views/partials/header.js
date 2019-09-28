import Component from '../../views/component.js';

class Header extends Component {
    render() {

        return new Promise(resolve => {
            resolve(`
                 <header class="header">                    
                                                
                </header>
            `);
        });
    }
}

export default Header;