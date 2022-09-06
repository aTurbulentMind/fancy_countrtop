
<body>
    


    
<h1>Contact:</h1>

<div class="follow">

    <a href="https://www.facebook.com/profile.php?id=100078803221612/">Facebook</a>

    <a href="https://www.facebook.com/profile.php?id=100078803221612/">Call</a>

</div>

    

<container>
        
        <form action="https://formsubmit.co/joelkrivers@gmail.com" method="POST">
            <wrapper>
                <box>
                    <input type="text" name="name" id="name" required>
                    <label for="fname">First and Last Name</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="email" id="email" required>
                    <input type="hidden" name="_next" value="https://www.lanternlightdevelopment.com/contact">
                    <label for="email">Email</label>

                </box>
            </wrapper>

           

            <wrapper>
                <box>
                    <input type="text" name="tel" id="tel" required>
                    <label for="tel">Point of preffered communication</label>
                </box>
            </wrapper>

            <wrapper>
                <box>
                    <input type="text" name="comp" id="comp" required>
                    <label for="comp">City/Town</label>
                </box>
            </wrapper>

            

          
            <wrapper>
                <box>
                    <textarea id="mes" required></textarea>
                    <label for="mes">Words here and stuff...</label>
                </box>
            </wrapper>
            <br><br><br><br>

        
            <button type="submit">Submit</button>
        </form>
    </container>


</body>

<style lang="scss"> 
   @import '../src/lib/basecamp';

   *{
        
        box-sizing: border-box;
    }

   h2{
      margin: 5%;
   }

   h3{
      font-weight: 100;
      
      margin: 5%;
   }

   p{
      margin: 3%;
   }


   .follow{ 

         display: flex;
         justify-content: center;
         align-items: center;
         font-family: $secondaryFont;

        a{
            position: relative;
            padding: 10px 30px;
            margin: 6% 2%;
            color: $textMain;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 3vw;
            overflow: hidden;
            transition: 0.3s;
            -webkit-box-reflect: below 1px linear-gradient(transparent,#0003);
        }

        a:nth-child(1) {
            filter: hue-rotate(155deg);
        }

        a:nth-child(3) {
            filter: hue-rotate(270deg);
        }

        a:hover {
            background: #cac71e;
            color:$backMain ;
            box-shadow: 0 0 50px #bfc21a;
            transition-delay: 0.2s;
        }

        a:before {
            content: '';
            position: absolute;
            top:0;
            left: 0;
            width: 10px;
            height: 10px;
            border-top: 2px solid rgb(17, 17, 1);
            border-left: 2px solid rgb(17, 17, 1);
            transition: 0.3s;
            transition-delay: 0.2s;
        }

        a:hover:before {
            width: 100%;
            height: 100%;
            border-top: 2px solid rgb(201, 201, 201) ;
            border-left: 2px solid rgb(201, 201, 201) ;
            transition-delay: 0;
        }

        a:after {
            content: '';
            position: absolute;
            bottom:0;
            right: 0;
            width: 10px;
            height: 10px;
            border-bottom: 2px solid rgb(17, 17, 1);
            border-right: 2px solid rgb(17, 17, 1);
            transition: 0.3s;
            transition-delay: 0;
        }

        a:hover:after {
            width: 100%;
            height: 100%;
            border-bottom: 2px solid rgb(201, 201, 201) ;
            border-right: 2px solid rgb(201, 201, 201) ;
            transition-delay: 0.2s;
        }
}

   container{
        letter-spacing: 1.5px;

        h2{
        color: $textMain;
        font-size: 3vw;
        text-align: center;
        grid-column: 1 ;
    }

    form{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        background: $highlight;
        width: 90%;
        margin:8%;
        padding: 4%;
        border-radius:4px;
        text-transform: capitalize;
    }

    wrapper{
        width: 100%;
        display: grid;
        grid-gap:30px;
        gap:30px;
    }

    box{
        width: 100%;
        position: relative;
        padding: 20px;
    }

    input,
    textarea{
        width: 100%;
        font-size: 2vw;
        background: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid $textMain;
        transition:0.3s linear;
    }

    input:focus,
    input:valid,
    textarea:focus,
    textarea:valid{
        padding: 10px;
        color: $textMain;
        background: $backTwo;
        margin: 10px;
        border-radius:4px;
        font-size: 2.5vw;
    }

    label{
        position: absolute;
        top: 0;
        left: 0;
        color: $textMain;
        font-size: 2.5vw;
        font-weight: bold;
        padding: 10px;
        transition: 0.3s linear;
    }

    input:focus ~ label,
    input:valid ~ label,
    textarea:focus ~ label,
    textarea:valid ~ label{
        padding: 0;
    }

    .section1{
        input{
            accent-color: hotpink;
            block-size: 45px;
            inline-size:18px;
        }

        input:focus,
        input:valid,
        textarea:focus,
        textarea:valid{
        padding: 0.5px;
        margin: 0.5px;
    }
    }

    .flex-row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        label {
            padding: 0 10px;
        }
    }
   


    button{
    background: rgba(16, 15, 17, 0.616);
        outline: none;
        font-weight: 100;
        letter-spacing: 4px;
        border: 1px solid $extra;
        border-radius:4px;
        color: $textMain;
        text-transform: uppercase;
        padding: 5px;
        margin: 4%;
        font-family: $mainFont;

        &:hover {
           transition: all 0.2s ease-in-out;
        background: $textMain;
        color: $backMain;
        transform: scale(1.05);
        }
 }
 }
 
  @media (min-width:750px) {
          img {
             width: 85%;
             margin:4% 0 10% 10%;
          }
      }

  @media (min-width:991px) {
          container{
              label{
        font-size: 1.5vw;
    }

    form{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        width: 85%;
    }
          }
      }

</style>