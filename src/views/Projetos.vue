<template>
  <div class="container">
    <transition name="toast">
      <div class="meio" v-show="showtoast">
        <div class="primi">
          <h2 class="letraParaResumi">Resumo dos projetos</h2>
          <div class="textoUm">
            <p>
              antes de passarmos por alguns projetos dos mais incriveis projetos da minha de todos
              os tempos, quero dizer que a maioria grande partes desses são projetos do meu inicio
              de estudo e que muitos não foram finalizados, pq eu sou muito preguiçoso, aproveite!
            </p>
          </div>
        </div>
        <div class="tituloUm">
          <h1>1.</h1>
          <p class="textoDeTitu">Projeto copia do site que utilizo no trabalho.</p>
        </div>
        <div class="sec">
          <p class="texteDois">
            Copia do Sarom conect, esse projeto foi feito de forma decontraida, eu so tava meio sem
            ter oq fazer e decidi copia o site da Sarom, porem, nenhum botão funciona,pois eu não
            continuei.
          </p>
          <img class="fotoUm" src="../components/alien.png" alt="" />
        </div>
        <div class="tituloDois">
          <h1>2.</h1>
          <p class="textoDeTitu">Fazendo uma Pokedex.</p>
        </div>
        <div class="terc">
          <p class="textoTreis">
            Queria treinar o uso de API, então decidi usar a API de pokemon,basicamente usei muitos
            PNG, foi simples,e foi muito bom para treinar meu javascript, pois foram usados varias
            rotas, algo que eu não estava tão acostumado, foi usado tambem o Vue, que com toda
            certeza não estava tão acostumado, esse projeto esta totalmente completo, com tudo
            funcionando!
          </p>

          <img class="fotoDois" src="../components/pokedex.png" alt="" />
        </div>
        <div class="tituloTres">
          <h1>3.</h1>
          <p class="textoDeTitu">Fazendo um site de pesquisa para achar filmes.</p>
        </div>
        <div class="quart">
          <p class="textoQuat">
            Queria treinar o uso de API, então decidi usar a API de pokemon,basicamente usei muitos
            oi mais um desafio para treinar o uso de API, oq na epoca eu não conhecia tanto, esse
            projeto tambem me possibilitou conhecer mais de backend e tambem treinar o uso de html e
            ccs.
          </p>
          <img class="fotoTreis" src="../components/filmes.png" alt="" />
        </div>
        <div class="tituloTres">
          <h1>4.</h1>
          <p class="textoDeTitu">Site sobre o filme MATRIX</p>
        </div>
        <div class="cinco">
          <p class="textoCinco">
            Na epoca que fiz esse site eu não gostei do jeito que ele ficou, mais vendo hoje em dia,
            talvez seja um dos meu projetos favoritos, pois fiz muito uso de animação do css, e pra
            um dos meu primeiros projetos, achei muito decente,lembro que fiz ele depois de assistir
            matrix e algumas animações ligadas a historia e estava facinado, ai resolvi fazer um
            "resumo" do primeiro filme.
          </p>
          <img class="fotoQuatro" src="../components/matrix.png" alt="" />
        </div>
        <div class="tituloTres">
          <h1>5.</h1>
          <p class="textoDeTitu">Site sobre a serie CYBERPUNK ENDRUNNERS</p>
        </div>
        <div class="seis">
          <p class="textoSeis">
            Talvez o meu projeto mais antigo que tenho guardado, eu amo esse site, se voce tem
            miopia, não se preocupe, eu não sei pq eu fiz literalmente tudo nesse site ser enorme,
            dava pra ver o site do outro canto da sala. Mais relamente amo muito esse site, foi o
            primeiro que fiz pra algo que amo, que é sobre uma serie sobre um dos meu jogos
            favoritos de todos os tempos, o site tem seus erros, mais até que não ficou tão ruim
            assim.
          </p>
          <img class="fotoQuatro" src="../components/cyber.png" alt="" />
        </div>
        <div class="textoSete">
          <div style="text-align: center; width: 60%">
            esses foram todos os sites que fiz que eu realmente gostei, tem mais, mais a maioria não
            funciona ou esta inacabado, esses pelo menos eram os mais pertos de ter acabado ou que
            eu realmente finalizei
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const showtoast = ref(false)

onMounted(() => {
  setTimeout(() => (showtoast.value = true), 500)
})
</script>
<style scoped>
.container {
  width: 85%;
  flex: 1;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: 2rem;
}
.letraParaResumi {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  height: 50px;
  font-style: normal;
  margin-left: 50px;
}
.meio {
  width: 100%;
  flex: 1;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 2rem;
  border-top: 1px solid #e2e2e2;
}
.primi {
  width: 80%;
  height: 35%;

  margin-top: 50px;
}
.textoDeTitu {
  padding-top: 28px;
  padding-left: 20px;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-enter-active {
  transition: 2s ease;
}
.tituloUm {
  height: 50px;
  display: flex;
  width: 100%;
  margin-top: 50px;
  font-size: 30px;
  border-top: 1px solid #beb6b6;
}
.tituloDois {
  height: 50px;
  display: flex;
  width: 100%;
  margin-top: 100px;
  font-size: 30px;
  border-top: 1px solid #beb6b6;
}
.tituloTres {
  height: 50px;
  display: flex;
  width: 100%;
  margin-top: 20px;
  font-size: 30px;
  border-top: 1px solid #beb6b6;
}
.textoUm {
  width: 70%;
  height: 20% !important;

  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  height: 50px;
  font-style: normal;
  margin-left: 50px;
  margin-top: 30px;
}
.fotoDois {
  width: 30rem;
  height: 100%;
  margin-left: 8rem;
}
.fotoTreis {
  width: 35rem;
  height: 100%;
  margin-left: 100px;
}
.fotoQuatro {
  width: 35rem;
  height: 20rem;
  margin-left: 100px;
}
.sec {
  width: 100%;
  height: 60%;
  margin-top: 50px;
  gap: 50px;
  display: flex;
}
.terc {
  width: 100%;
  height: 30rem;
  margin-top: 100px;
  display: flex;
}

.quart {
  width: 100%;
  height: 30rem;
  margin-top: 100px;
  display: flex;
}
.cinco {
  width: 100%;
  height: 25rem;
  margin-top: 100px;
  display: flex;
}
.seis {
  width: 100%;
  height: 25rem;
  margin-top: 100px;
  display: flex;
}
.texteDois {
  width: 45%;
  height: 20% !important;
  margin-top: 100px;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;

  font-style: normal;
  margin-left: 50px;
}
.textoTreis {
  width: 40%;
  height: 40% !important;
  margin-top: 100px;
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;

  font-style: normal;
  margin-left: 50px;
}
.textoQuat {
  width: 40%;
  height: 40% !important;
  margin-top: 100px;
  font-family: 'Montserrat', sans-serif;

  font-optical-sizing: auto;
  font-weight: 500;

  font-style: normal;
  margin-left: 50px;
}
.textoCinco {
  width: 40%;
  height: 40% !important;

  font-family: 'Montserrat', sans-serif;

  font-optical-sizing: auto;
  font-weight: 500;

  font-style: normal;
  margin-left: 50px;
}
.textoSeis {
  width: 40%;
  height: 40% !important;

  font-family: 'Montserrat', sans-serif;

  font-optical-sizing: auto;
  font-weight: 500;

  font-style: normal;
  margin-left: 50px;
}
.textoSete {
  width: 100%;
  height: 40% !important;
  text-align: center;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  border-top: 1px solid #beb6b6;
  padding-top: 20px;

  font-optical-sizing: auto;
  font-weight: 500;

  font-style: normal;
  margin-left: 50px;
}
.fotoUm {
  width: 58%;
  height: 26rem;
}
@media screen and (min-width: 610px) and (max-width: 1023px) {
  .fotoUm {
    width: 56%;
    height: 20rem;
  }

  .fotoDois {
    width: 40%;
    height: 100%;
    margin-left: 0rem;
  }
  .fotoTreis {
    width: 56%;
    height: 100%;
    margin-left: 0rem;
  }
  .fotoQuatro {
    width: 56%;
    height: 22rem;
    margin-left: 0rem;
  }
  .texteDois {
    width: 50%;
    height: 20rem !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 11px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoTreis {
    width: 50%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 11px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoQuat {
    width: 50%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 11px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoCinco {
    width: 50%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 11px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoSeis {
    width: 50%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 11px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoSete {
    width: 100%;
    height: 40% !important;
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    border-top: 1px solid #beb6b6;
    padding-top: 20px;

    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 11px;
    font-style: normal;
    margin-left: 0px;
  }
  .sec {
    width: 100%;
    height: 60%;
    margin-top: 100px;
    display: flex;
    gap: 5%;
  }
  .terc {
    width: 100%;
    height: 30rem;
    margin-top: 100px;
    display: flex;
    gap: 10%;
  }
  .quart {
    width: 100%;
    height: 25rem;
    gap: 5%;
    margin-top: 100px;
    display: flex;
  }
  .cinco {
    width: 100%;
    height: 25rem;
    gap: 5%;
    margin-top: 100px;
    display: flex;
  }
  .seis {
    width: 100%;
    height: 25rem;
    gap: 5%;
    margin-top: 50px;
    display: flex;
  }
}
@media screen and (min-width: 320px) and (max-width: 609px) {
  .container {
    width: 85%;
    flex: 1;
    padding-top: 7rem;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-left: 0rem;
  }
  .texteDois {
    width: 70%;
    height: 10rem !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 9px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoTreis {
    width: 70%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 9px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoQuat {
    width: 70%;
    height: 50% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 9px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoCinco {
    width: 70%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 9px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoSeis {
    width: 70%;
    height: 100% !important;
    margin-top: 0px;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 9px;
    display: flex;
    align-items: center;
    font-style: normal;
    margin-left: 0px;
  }
  .textoSete {
    width: 100%;
    height: 40% !important;
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    border-top: 1px solid #beb6b6;
    padding-top: 20px;

    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 9px;
    font-style: normal;
    margin-left: 0px;
  }

  .fotoUm {
    width: 75%;
    height: 10rem;
    margin-left: 0rem;
  }

  .fotoDois {
    width: 75%;
    height: 58%;
    margin-left: 0rem;
  }
  .fotoTreis {
    width: 75%;
    height: 58%;
    margin-left: 0rem;
  }
  .fotoQuatro {
    width: 75%;
    height: 58%;
    margin-left: 0rem;
  }

  .sec {
    width: 100%;
    height: 15rem;
    gap: 0;
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .terc {
    width: 100%;
    height: 20rem;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .quart {
    width: 100%;
    height: 20rem;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cinco {
    width: 100%;
    height: 20rem;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .seis {
    width: 100%;
    height: 20rem;
    margin-top: 0px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .tituloUm {
    height: 50px;
    display: flex;
    width: 100%;
    margin-top: 50px;
    font-size: 10px;
    border-top: 1px solid #beb6b6;
  }
  .tituloDois {
    height: 50px;
    display: flex;
    width: 100%;
    margin-top: 50px;
    font-size: 10px;
    border-top: 1px solid #beb6b6;
  }
  .tituloTres {
    height: 50px;
    display: flex;
    width: 100%;
    margin-top: 20px;
    font-size: 10px;
    border-top: 1px solid #beb6b6;
  }
  .textoDeTitu {
    padding-top: 8px;
    padding-left: 6px;
  }
  .primi {
    width: 80%;
    height: 35%;
    font-size: 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
}
</style>
