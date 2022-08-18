<script>
	import Nav from '../lib/Nav.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<body>
	<Nav />
	<slot />

	<Footer />
</body>

<style lang="scss">
	@import '../src/lib/basecamp';
</style>
