import App from './App.svelte';
import { username } from './stores.js';
import use_local_storage from './use_local_storage.js';

window.username = username;
use_local_storage(username, 'username');

const app = new App({
	target: document.body
});

export default app;
