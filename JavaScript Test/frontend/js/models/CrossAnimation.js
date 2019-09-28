class CrossAnimation {

    getCount() {
        let text = document.getElementsByClassName('styleQuestioin')[0].innerText,
            count = +text[0];

        if (document.documentElement.clientWidth>1000) {
            let countTrue = 70 * count;

            return countTrue;
        } else if (document.documentElement.clientWidth<801) {
            let countTrue = 30 * count;

            return countTrue;
        } else {
            let countTrue = 50 * count;

            return countTrue;
        }
    }

}

export default CrossAnimation;