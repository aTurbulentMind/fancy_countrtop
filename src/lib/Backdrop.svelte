<script>
	import { Color, PlaneGeometry, MeshStandardMaterial, DoubleSide, Mesh as ThreeMesh } from 'three';
	import { Mesh, MeshInstance } from '@threlte/core';
	import { onMount } from 'svelte';
	export let floor = 1;
	export let segments = 20;
	export let receiveShadow = true;
	export let material = new MeshStandardMaterial({
		side: DoubleSide,
		color: new Color('goldenrod').convertSRGBToLinear()
	});
	export let position = { y: -1, z: -5 };
	export let scale = { x: 10, y: 25, z: 10 };
	export let rotation = { x: -Math.PI / 2, z: Math.PI / 2 };

	let geometry = new PlaneGeometry(1, 1, segments, segments);
	const easeInExpo = (x) => (x === 0 ? 0 : Math.pow(2, 10 * x - 10));

	function updateBackdrop(sgmts, flr, geo) {
		let i = 0;
		const offset = sgmts / sgmts / 2;
		const position = geo.attributes.position;
		for (let x = 0; x < sgmts + 1; x++) {
			for (let y = 0; y < sgmts + 1; y++) {
				position.setXYZ(
					i++,
					x / sgmts - offset + (x === 0 ? -flr : 0),
					y / sgmts - offset,
					easeInExpo(x / sgmts)
				);
			}
		}
		position.needsUpdate = true;
		geo.computeVertexNormals();
		geometry = geo;
	}

	$: updateBackdrop(segments, floor, geometry);
</script>

<Mesh {scale} {position} {rotation} {geometry} {material} {receiveShadow} />
