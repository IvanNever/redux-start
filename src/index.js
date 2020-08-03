import {createStore} from 'redux';
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

const plus = () => ({ type: 'PLUS' });
const minus = () => ({ type: 'MINUS' });
const reset = () => ({ type: 'RESET'});

const store = createStore(reducer);

document.getElementById('plus').addEventListener('click', () => {
    store.dispatch(plus());
});

document.getElementById('minus').addEventListener('click', () => {
    store.dispatch(minus());
});

document.getElementById('reset').addEventListener('click', () => {
    store.dispatch(reset());
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
}

store.subscribe(() => {
    update();
});