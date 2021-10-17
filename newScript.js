// BANNER 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("slideMarcador");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
    }    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}






// BANNER COM JQUERY

// $(document).ready(function () {

//     $("#slider img:eq(0)").addClass("banner-ativo").fadeIn()

//     setInterval(slide, 5000)

//     function slide() {
//         if ($(".banner-ativo").next().length) {


//             $(".banner-ativo").removeClass("banner-ativo").fadeOut().next().addClass("banner-ativo").fadeIn()
//         } else {
//             $(".banner-ativo").removeClass().fadeOut()
//             $("#slider img:eq(0)").addClass("banner-ativo").fadeIn()
//         }
//     }


// })

// FIM DO BANNER 





function tempCard() {
    let cont = document.getElementById("destaque");
    let dados = [

        {
            marca: "ms",
            edicao: "padrão",
            titulo: "Halo Infinite",
            preco: "250,00",
            parcel: "50,00",
            imagem: "newImg/halo infinite.jpg",
            desconto: '',
            semdesc: ''
        },
        {
            marca: "nint",
            edicao: "padrão",
            titulo: "The King of Fighters 13",
            preco: "125,00",
            parcel: "25,00",
            imagem: "newImg/kof13.jpg",
            desconto: "",
            semdesc: ""
        },

        {
            marca: "ms",
            edicao: "lendária",
            titulo: "Grand Theft Auto V",
            semdesc: "R$ 130,00",
            preco: "110,50",
            parcel: "26,00",
            imagem: "newImg/gta v.jpg",
            desconto: "15% de desconto",

        },

        {
            marca: "psx",
            edicao: "deluxe",
            titulo: "Need For Speed Payback",
            semdesc: "R$ 299,",
            preco: "284",
            parcel: "59,80",
            imagem: "newImg/nfs2.jpg",
            desconto: "5% de desconto",

        }

    ]

    let template = "";

    for (let index = 0; index < dados.length; index++) {
        const consDados = dados[index];

        console.log("noticia")

        function alertando() {
            let a = document.getElementById(`tituloProduto${index}`)
            alert(a)
        }


        template += `<!-- CARTAO -->
    <div class="cardItem ${consDados.marca}">

        <!-- IMAGEM DO CARTAO  -->
        <div class="cardItemImg">
            <p class="desconto">${consDados.desconto}</p>
            <img id="capajogo" src="${consDados.imagem}">
        </div>

        <!-- ESCRITA DO CARTAO  -->
        <div class="cardItemDesc">
            <p class="edt">edição ${consDados.edicao}</p>

            <p class="cardItemNome"><span id="tituloProduto${index}">${consDados.titulo}</span></p><br>

            <h3 id="precoJogo" class="cardItemPrice"><s class="oldPrice">${consDados.semdesc}</s><br> R$ ${consDados.preco}</h3>

            <p class="edt">até 5x de ${consDados.parcel}</p>

        </div>

        <script type="text/javascript" src="newScript.js">
        function teste(){
            alert('oi');
        }
        </script>
        


        <!-- BOTAO COMPRAR LINKANDO PARA DETALHES.HTML - DETALHE DO PRODUTO  -->
        <div class="cardItemBtn">
            <a href="newindexdetail.html" onclick="teste()">comprar</a>
        </div>






        </div>`

       
    }

    cont.innerHTML = template;
    

    // function func5() {
    //     let a = document.getElementById('tituloProduto'+index)
    //     alert(a)
    // }
}






// FILTRAR JOGOS 

function xbox() {
    let play = document.querySelectorAll(".psx");
    let bigN = document.querySelectorAll(".nint");
    let xb = document.querySelectorAll(".ms");



    for (var i = 0; i < play.length; i++) {
        play[i].style.display = "none";
        // play[i].style.display = "none";
    }

    for (let i = 0; i < bigN.length; i++) {
        bigN[i].style.display = "none";
        // bigN[i].style.display = "none";

    }

    for (let i = 0; i < xb.length; i++) {
        xb[i].style.display = "flex";
    }
}



function sony() {
    let xb = document.querySelectorAll(".ms");
    let bigN = document.querySelectorAll(".nint");
    let play = document.querySelectorAll(".psx")

    for (let i = 0; i < play.length; i++) {
        play[i].style.display = "flex";
    }

    for (var i = 0; i < xb.length; i++) {
        xb[i].style.display = "none";
        // play[i].style.display = "none";
    }

    for (let i = 0; i < bigN.length; i++) {
        bigN[i].style.display = "none";
        // bigN[i].style.display = "none";

    }
}



function nintendo() {
    let xb = document.querySelectorAll(".ms");
    let play = document.querySelectorAll(".nint");
    let bigN = document.querySelectorAll(".nint")


    for (var i = 0; i < xb.length; i++) {
        xb[i].style.display = "none";
        // play[i].style.display = "none";
    }

    for (let i = 0; i < play.length; i++) {
        play[i].style.display = "none";
        // bigN[i].style.display = "none";

    }

    for (let i = 0; i < bigN.length; i++) {
        bigN[i].style.display = "flex"

    }
}
// FIM DO FILTRO 






// ESTE ERA O CODIGO QUANDO EU USAVA SEM RENDERIZAR OS CARDS. 
// ELE PEGAVA O NOME (QUE POR ID JA DEVO TER MUDADO O  NOME) DO CARD EM VARIAVEL 
// E EU PEGAVA ESSE VALOR NA PAGINA DE DETALHES


// function clickTest() {
//     let tituloProduto = document.getElementById("tituloProduto").innerHTML;

//     console.log(tituloProduto);
//     localStorage.setItem('varNome', tituloProduto);

// }


// function itemName() {
    
//     let testenome = document.getElementById('itemName');
//     testenome.textContent = localStorage.getItem('varNome')
// }








// teste pra pegar var do nome 

{/* <script>
        
function varNome() {
    let nomeDoCard = document.getElementById('tituloProduto${index}').innerHTML;
    console.log(nomeDoCard)

    localStorage.setItem('letNome', nomeDoCard);

console.log(nomeDoCard);
}

function itemName() {

    let testenome = document.getElementById('itemName');
    testenome.textContent = localStorage.getItem('letNome')
}

</script> */}