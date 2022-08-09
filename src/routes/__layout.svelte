<script>
	import Nav from '../structure/Nav.svelte';
	import Footer from '../structure/Footer.svelte';
</script>

<body>
	<Nav />
	<slot />

	<Footer />
</body>

<style lang="scss">
	@import '../structure/home';
</style>
