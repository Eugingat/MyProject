
class RedirectTo {

    redirect() {
        const transition = location.hash.slice(2),
            requestForTransition = {};

        [requestForTransition.resource, requestForTransition.id, requestForTransition.action] = transition.split('/');

        let idForTransition = parseInt(requestForTransition.id) + 1;

        switch (11) {
            case idForTransition :
                location.hash = '/Answer';
                break;

            default:
                location.hash = `#/Q/${idForTransition}`;
        }
    }

}

export default RedirectTo;