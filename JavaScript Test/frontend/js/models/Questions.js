import Error404 from '../views/pages/error404.js';

class Questions {
	getQuestion(id) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();

			xhr.open('GET', `http://localhost:3000/api/Q/${id}`, true);

			xhr.onload = () =>{
				try {
					resolve(JSON.parse(xhr.response));
				} catch (e) {
					let page = new Error404();
					page.render();
				}
			};
			xhr.send();
		});
	}

	correctAnswer(updatedAnswer,id) {
		return new Promise(resolve => {
			const xhr = new XMLHttpRequest();

			xhr.open('PUT', `http://localhost:3000/api/Q/${id}`, true);
			xhr.setRequestHeader('Content-Type', 'application/json');

			xhr.onload = () => {
				try {
					resolve();
				} catch (e) {
					let page = new Error404();
					page.render();
				}
			};

			xhr.send(JSON.stringify(updatedAnswer));
		});
	}

    getAnswer() {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'http://localhost:3000/api/Answer', true);

            xhr.onload = () => {
				try {
					resolve(JSON.parse(xhr.response));
				} catch (e) {
					let page = new Error404();
					page.render();
				}

			};

            xhr.send();
        });
    }

}

export default Questions;