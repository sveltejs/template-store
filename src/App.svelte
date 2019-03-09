<script>
	import { username } from "./stores.js";
	import Greeting from './Greeting.svelte';
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {$username}!</h1>
<Greeting />

<p>Open the console and try interacting with the username store:</p>

<pre>
{"username.set('everybody')"}
</pre>
