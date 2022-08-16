<script>
	import Nav from '../assets/Nav.svelte';
	import Footer from '../assets/Footer.svelte';
</script>

<body>
	<Nav />
	<slot />

	<Footer />
</body>

<style lang="scss">
	@import '../src/assets/basecamp';
</style>
