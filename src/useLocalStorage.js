export default function useLocalStorage(store, key) {
	const json = localStorage.getItem(key);
	if (json) {
		store.set(JSON.parse(json));
	}

	store.on('state', ({ current }) => {
		localStorage.setItem(key, JSON.stringify(current));
	});
}