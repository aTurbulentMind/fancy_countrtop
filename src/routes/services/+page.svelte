<script>
         
        // Get HTML head element
        var head = document.getElementsByTagName('HEAD')[0];
 
        // Create new link Element
        var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = '/src/lib/test.css';
 
        // Append link element to HTML head
        head.appendChild(link);
    </script>

<body>
	<h1>Prices</h1>
    <img src="img/money.png/" alt="">
	<p>
		The price of product varies between the scope of the project. I'm an economic human and always
		attempt to give people deal for the product they request. Just remember that cheap things are
		not always good and good things are not always cheap.
	</p>

	<h1>Services</h1>

	<h2>Countertops</h2>
    <img src="img/UI.png/" alt="">
	<p>
		The user interface is how the human interacts with a computer, website, enviroment or
		application. A well designed UI provides the user an experience that is easy and natural, in
		turn causing the user to question what they have been missing until now. &nbsp; &nbsp; &nbsp;
	</p>

	<p>
		UX is derived from the entire experience of the time spent at your site. How the culture around
		you or your product feels, and how it aligns with the material in front of them. "UX is
		concerned with the entire process of acquiring and integrating a product, including aspects of
		branding, design, usability and function." &nbsp; &nbsp; &nbsp;
	</p>

	<h2>Bathrooms</h2>
    <img src="img/devoooo.png/" alt="">
	<p>
		Through direct communication we can develop a conduit to the connected community of the
		internet. Development is the whole of the process. Connecting the UI/UX, design and actual
		product is the focus of development. We will turn your future sucess into the steps of today
		through the tried and true practice of hard work.
	</p>

	<h2>extra</h2>
    <img src="img/weby.png/" alt="">
	<p>
		It is easy to have built it and let it be. Before you know it, five years have passed. Now what
		was great seems stale and in need of a refresh. Let's talk about bringing your site into the
		future.
	</p>

	<h2>Outdoor</h2>
    <img src="img/desiggy.png/" alt="">
	<p>
		The process of graphic design is the interconnected bridge between the art and means of
		dispersal to communicate the ideas of your entity. Great design works with a variety of media
		tools in order to inspire a particular bracket. Video, audio, images and typography are the
		backbone of graphic design. &nbsp; &nbsp; &nbsp;
	</p>

</body>

<style lang="scss">
	@import '../src/lib/basecamp';

	.social {
		img {
			margin-bottom: -30px;
		}
	}

    p{
        margin: 5% 10% 10% 20%;
    }

    img{
        max-width:8%;
        margin: 0 0 -13% 8%;
    }
</style>
