<script>
	import {
		MeshStandardMaterial,
		MeshPhysicalMaterial,
		DoubleSide,
		Color,
		BackSide
	} from 'three';
	import {
		Canvas,
		DirectionalLight,
		AmbientLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core';
	import { GLTF, Float } from '@threlte/extras';

	let enableUserControl = false;
</script>


<body>

	<div class="scene_canvas">
	<div class="scene_head" />
	<Canvas>
		<PerspectiveCamera position={{ x: 10, y: 10, z: 6 }}>
			<OrbitControls  enabled={enableUserControl} />
		</PerspectiveCamera>

		<DirectionalLight
			shadow
			intensity={1}
			color={'white'}
			position={{ x: 5, y: 15, z: 10 }}
			target={{ x: 1 }}
		/>
		<AmbientLight intensity={0.875} />
		
		<Float>
			<GLTF 
			url={'/initOne.glb'} 
			rotation={{ x: 0  * (Math.PI / 45) }} 
			scale={12} 
			castShadow position={{ y: -0.5 }}
			 />
		</Float>
		</Canvas>

		<!-- <div class="controls">
    	<label>Scene <br> Control <br>
     	 <input 
        type="checkbox"
        bind:checked={enableUserControl}
		 />
   		 </label>
		</div>--> 
    	</div>

	<div class="art-banner" id="art-banner">
		<div class="art-banner-bg" />
		<div class="banner-text">Artistic <br />Artisan <br /> Countertops</div>

		<div class="form upper">
			<container>
				<form action="https://formsubmit.co/joelkrivers@gmail.com" method="POST">
					<wrapper>
						<box>
							<input type="text" name="email" id="email" placeholder="Email" required />
							<input
								type="hidden"
								name="_next"
								value="https://www.lanternlightdevelopment.com/contact"
							/>
						</box>
					</wrapper>
					<br />
					<br />
					<button class="butt upper" type="submit">Contact</button>
				</form>
			</container>
		</div>

		<a href="/" class="soc"
			><svg viewBox="0 0 178 136" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M91.8925 113.333V78.1999H80.3225V64.3733H89.89C90.3328 64.3733 91.1827 64.4254 91.5365 64.1421C91.9148 63.8361 91.8836 63.2286 91.8925 62.7866V58.7066C91.8925 52.3237 91.828 46.5527 96.3803 41.4822C100.639 36.7426 106.048 36.2575 111.917 36.2666L115.255 36.4933L119.705 36.7199V49.1866L111.027 49.3521C109.432 49.5855 108.171 49.8439 107.116 51.2311C106.355 52.2285 106.148 53.6225 106.132 54.8533V62.3333C106.137 64.0854 106.104 64.3597 107.912 64.3733H119.26L117.702 78.1999H106.132V113.333H128.382C131.822 113.329 133.496 111.624 133.5 108.12V93.6133V27.8799C133.496 24.455 131.751 22.6711 128.382 22.6666H114.142H49.6175C46.2934 22.6711 44.5045 24.5026 44.5 27.8799V42.3866V108.12C44.5 108.804 44.4778 109.498 44.678 110.16C45.083 111.493 46.3067 112.739 47.615 113.152C48.6541 113.478 54.1454 113.333 55.625 113.333H91.8925Z"
					fill="#3B5998"
				/>
			</svg>
		</a>
	</div>


	<div class="reviews">
		<div class="card">
			<div class="card-title">Better than I expected</div>
			
			<div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim quisquam? Hic. <a href="/">CLICK</a></div>
		</div>

		<div class="card">
			<div class="card-title">Better than I expected</div>
			
			<div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim quisquam? Hic. <a href="/">CLICK</a></div>
		</div>

		<div class="card">
			<div class="card-title">Better than I expected</div>
			
			<div class="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, enim quisquam? Hic. <a href="/">CLICK</a></div>
		</div>
	</div>
	

	<h1>Words</h1>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora sint rem voluptatum
		reprehenderit repellendus facere ad a totam assumenda! Dolorum maxime mollitia fugit ipsum odit
		praesentium autem, quo distinctio commodi iusto! Corporis praesentium laudantium saepe enim
		commodi vero voluptate!
	</p>

	<h2>Other words.</h2>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat aut maiores ea
		facilis corrupti quibusdam suscipit enim facere beatae?  
		<br><br><br>
		<a href="/contact/" class="butt">Enter</a>
	</p>

	
</body>

<style lang="scss">
	@import '../src/lib/basecamp';



	h1, h2, p {
		z-index: 5;
		position: relative;
		background-color: $backHallow;
		border: $bord;
    	box-shadow: $mainShadow;
    	border-radius: $rad;
		width: fit-content;
		padding: $pad;
		text-shadow: $text_shadow;
	}

	.scene_canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		input[type="checkbox"] {
			height:1.5em;
			width:1.5em;
			cursor:pointer;
			position:relative;
			margin: 0 1.25rem;
			-webkit-transition: .10s;
			-webkit-appearance:none;
			border-radius:4em;
			background-color:$grabber;
		}
		input[type="checkbox"]:checked {
			background-color:$extra;
		}
		input[type="checkbox"]:before, input[type="checkbox"]:checked:before {
			position:absolute;
			top:0;
			left:0;
			width:100%;
			height:100%;
			line-height:1.5em;
			text-align:center;
			color:white;
		}
		input[type="checkbox"]:checked:before {
			content: '???';
		}
		
		.controls {
			bottom: 12%;
			right: 1px;
			font-size: $f-sm;
			text-align: center;
			position: absolute;
			padding: 0;
			background: $backHallow;
			border: $bord;
			border-radius:$rad;
		}
	}

	.scene_head {
		position: fixed;
		top: 3rem;
		left: 0;
		width: 100%;
		text-align: center;
		font-family: Verdana, sans-serif;
	}

	.art-banner {
		@include grid;
		background: $gradient;
		height: 100vh;
		width: 100vw;
		margin: 0;

		svg {
			width: 50%;
		}

		input,
		textarea {
			width: 100%;
			font-size: $f-lg;
			background: $backHallow;
			padding:0 $pad;
			border: none;
			border-radius: $rad;
			outline: none;
			border-bottom: 1px solid $textMain;
			transition: $tSpeed linear;
			margin-left: $marg_xxxl;
			color: $textMain;
		}

		input:focus,
		input:valid,
		textarea:focus,
		textarea:valid {
			padding:0 $pad;
			color: $textMain;
			background: $backTwo;
			border-radius: $rad;
			font-size: $f-lg;
			grid-column: 2;
			grid-row: 5;
		}

		.soc {
			grid-column: 4;
			grid-row: 5;
			margin: $marg_xl;
		}
	}

	.art-banner-bg {
		background-size: 100%;
		opacity: $op-t;
		

		img {
			width: 100%;
			padding: 15%;
		}
	}

	.banner-text {
		font-size: 11.5vw;
		font-weight: bold;
		grid-column: 1 / span 2;
		grid-row: 1 /* no need to type one*/;
		align-self: center;
		justify-self: center;
		margin-left: 5rem;
		z-index: 3;
		text-shadow: $text_shadow;
	}

	.form {
		margin-top: $marg_xl;
		grid-column: 1;
		grid-row: 5;
	}

    .reviews{
		background: $gradientFlip;
		width: 100vw;
		margin: 0;

		.card{
			margin-top: $marg_xxxl;
			z-index: 10;

			@media (min-width: 1280px) {

	}
		}
	}

	.butt{
				margin: 0 40%;
			 }
	
</style>
