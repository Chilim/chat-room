import { createStore } from 'redux';
import reducer from '../reducers';
import { contacts } from '../../static-data';

// console.log(contacts);
export const store = createStore(reducer, { contacts });
