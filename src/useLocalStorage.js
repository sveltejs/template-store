export default function useLocalStorage(store, key) {
	const json = localStorage.getItem(key);
	if (json) {
		store.set(JSON.parse(json));
	}

	store.onchange(state => {
		localStorage.setItem(key, JSON.stringify(state));
	});
}