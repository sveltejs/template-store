export default function use_local_storage(store, key) {
	const current_value = localStorage.getItem(key);
	if (current_value) {
		store.set(JSON.parse(current_value));
	}

	store.subscribe(value => {
		localStorage.setItem(key, JSON.stringify(value));
	});
}
