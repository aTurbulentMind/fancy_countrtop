<script lang="ts">
    import '$lib/style/test.css'
    </script>


    <body>
        
    
    
    <img class="face" src="img/faceo.jpg/" alt="its my face">

    <h1>Larae Smith</h1>
    <ul>
        <li>Age: 31</li>
        
        <li>Specialty: </li>
    </ul>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum quaerat omnis. Eum omnis, aliquid necessitatibus, assumenda molestias sequi suscipit dicta ad aut, quasi possimus hic ipsum dolorum modi velit iste repellat ex doloribus dignissimos.</p>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ipsam facere ratione ad mollitia aut debitis commodi dicta voluptatem, culpa suscipit natus quos animi tenetur odit voluptatibus! Iusto dolores eius vel quasi, doloremque corporis necessitatibus ipsam quas reiciendis doloribus vero ab modi praesentium illum. Autem optio aperiam explicabo obcaecati quisquam!.</p>

     <img src="img/missLaurie.jpg/" alt="sunrays cast though morning fog">

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iusto magnam provident expedita fuga sint maiores, mollitia pariatur sunt repudiandae! Fuga ex repellat voluptatem minima.</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis, quam ipsa assumenda aliquid numquam quaerat rem facere sequi in veniam nemo ipsam saepe, atque odit consequuntur asperiores libero mollitia..</p>

    <img src="img/hitkin.jpg/" alt="a sunny day on top of a mountain at a lake. It is serene">

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio enim tenetur, quod eius error est quibusdam maxime, natus nisi veniam eaque, hic numquam recusandae temporibus perspiciatis deleniti delectus provident corporis ipsa? Architecto reiciendis nostrum, neque aperiam impedit sed esse corporis quia in..</p>

    </body>


    


<style lang="scss">
    @import '../src/lib/basecamp';


    img {
        width: 80%;
       margin: 0 10%;
       border-radius: $rad;
    }

    ul{
        list-style: none;
        margin: $full_marg;
    }

    .vid {
          max-width: 99%;
      }

      p{
        margin: 20%;
      }

   @media (min-width:700px) {

          .face{
             width: 35%;
             margin:4% 35%;
          }
      }



</style>