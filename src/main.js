import App from './App.html';
import { Store } from 'svelte/store.js';
import useLocalStorage from './useLocalStorage.js';

const store = new Store({
	name: 'world'
});

window.store = store;

// save data to localStorage every time our state changes
useLocalStorage(store, 'my-app');

const app = new App({
	target: document.body,
	store
});

export default app;