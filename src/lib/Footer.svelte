<div class="footer">
	<h1>A<br> A<br> C</h1>
	<footBox>
		<ul style="grid-row: 2;
						grid-column: 2;">
			<li><a href="/">HOME</a></li>
			<li><a href="/">CALL</a></li>
			<li><a href="/contact/">CONTACT</a></li>
			<li><a href="/services/">SERVICES</a></li>
			<li><a href="/about/">ABOUT</a></li>
		</ul>
	</footBox>
	<footBox>
		<ul style="grid-row: 2;
						grid-column: 2;">
			<li><a href="/showroom/">SHOWROOM:</a></li>
			<li><a href="/">KITCHEN</a></li>
			<li><a href="/bathroom/">BATHROOM</a></li>
			<li><a href="/">OUTDOOR</a></li>
		</ul>
	</footBox>
	<footBox>
		<socBox>
			<a href="/https://www.facebook.com/profile.php?id=100078803221612/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 24 24"
					><path
						d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21.391 21.391 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104h-5.171z"
						fill="currentColor"
						fill-rule="evenodd"
					/></svg
				></a
			>
		</socBox>
	</footBox>
</div>

<style lang="scss">
	@import 'basecamp';

	.footer {
		display: grid;
		background: $gradient;
		margin-bottom: $marg_xxxl;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		z-index: 10;
		position: relative;

		footBox {
			margin: 8% 0 0 0;
			h1 {
				display: grid;
				grid-row: 1;
				grid-column: 1;
				margin: $marg;
				padding: $pad;
				font-size: $f-sm;
			}

			ul {
				display: grid;
				position: relative;
				margin: 5% 3% -8% 10%;
				list-style: none;

				li {
					margin: $marg;
					padding: $pad_sm;
					

					a {
						color: $textMain;
						font-size: $font;
					}
				}
			}
			socBox {
				svg {
					background: $textMain;
					color: $backMain;
					border-radius: 50%;
					margin: $marg $marg_xl;
					padding: $marg;
					width: 10%;

					&:hover{
						@include butts;
					}
				}
			}
		}
	}

	@media (min-width: 780px) {

    //foots
    .footer {
        margin-bottom: -8%;
    }
}
</style>
