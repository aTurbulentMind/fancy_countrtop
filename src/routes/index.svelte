<body>
	<h1>Artisin Art Countertops</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et labore totam odio, adipisci nobis. Provident consequatur deserunt a, dicta rem ex dolor quam delectus error ab dolorem. Laborum ipsam quisquam dolorum repellendus voluptatibus molestias assumenda quasi consequuntur veniam nemo.</p>

	<h1>Artisin Art Countertops</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et labore totam odio, adipisci nobis. Provident consequatur deserunt a, dicta rem ex dolor quam delectus error ab dolorem. Laborum ipsam quisquam dolorum repellendus voluptatibus molestias assumenda quasi consequuntur veniam nemo.</p>

	<h1>Artisin Art Countertops</h1>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et labore totam odio, adipisci nobis. Provident consequatur deserunt a, dicta rem ex dolor quam delectus error ab dolorem. Laborum ipsam quisquam dolorum repellendus voluptatibus molestias assumenda quasi consequuntur veniam nemo.</p>
</body>

<style lang="scss">
	@import '../structure/home';

	.art-banner {
		height: 100vh;
		display: grid;
		background: $gradient;
		grid-template-columns: 20px 1fr 1fr 1fr 20px;
		grid-template-rows: 20px 1fr 1fr 1fr 20px;
		margin: 5px 0;
		z-index: 99;

		svg {
			width: 50%;
		}

		input,
		textarea {
			width: 100%;
			font-size: 3vw;
			background: $backTre;
			border: none;
			border-radius: 2px;
			outline: none;
			border-bottom: 1px solid $textMain;
			transition: 0.3s linear;
		}

		input:focus,
		input:valid,
		textarea:focus,
		textarea:valid {
			padding: 10px;
			color: $textMain;
			background: $backTwo;
			margin: 10px;
			border-radius: 4px;
			font-size: 2.5vw;
		}

		.soc {
			grid-column: 4;
			grid-row: 4;
			z-index: 10;
		}
	}

	.art-banner-bg {
		background-size: 100%;
		opacity: 0.25;
		grid-column: 1 / -1;
		grid-row: 1 / -1;

		img {
			width: 100%;
			padding: 15%;
		}
	}

	.banner-text {
		font-size: 11.5vw;
		font-weight: bold;
		grid-column: 2 / span 2;
		grid-row: 2 /* no need to type one*/;
		align-self: center;
		justify-self: center;
		z-index: 3;
	}

	.form {
		grid-column: 2;
		grid-row: 4;
		z-index: 10;
	}

	button {
		background: rgba(16, 15, 17, 0.616);
		outline: none;
		font-weight: 100;
		letter-spacing: 4px;
		border: 1px solid $extra;
		border-radius: 4px;
		color: $textMain;
		text-transform: uppercase;
		padding: 5px;
		margin: 4%;

		&:hover {
			transition: all 0.3s ease-in-out;
			background: $textMain;
			color: $backMain;
			font-weight: 800;
			transform: scale(1.05);
			cursor: pointer;
		}
	}
</style>
