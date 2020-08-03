import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const {dispatch} = store;

const {plus, minus, reset} = bindActionCreators(actions, dispatch);

document.getElementById('plus').addEventListener('click', plus);

document.getElementById('minus').addEventListener('click', minus);

document.getElementById('reset').addEventListener('click', reset);

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
}

store.subscribe(() => {
    update();
});