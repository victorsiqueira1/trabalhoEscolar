<template>
  <div class="container">
    <transition name="toast">
      <div class="meio" v-show="showtoast">
        <div class="tituloNovo">
          <h1 class="letraGrande" style="font-size: 60px">Meu Pessoal</h1>
          <p class="tituloMenor">O que faço quando não estou programando?</p>
        </div>
        <div class="quadradoFamilia">
          <div class="textoUm" style="padding-bottom: 50px; width: 50%">
            <div class="titulos">Familia</div>
            <div class="familia">
              <p style="padding: 10px">
                Uma das atividades que mais aprecio em meu tempo livre é visitar cachoeiras e
                praias. Embora não tenha grande afinidade com viagens, sinto-me extremamente à
                vontade nesses ambientes, onde adoro nadar e desfrutar momentos agradáveis na
                companhia de minha mãe e meu padrasto
              </p>
              <p style="padding: 10px">
                tambem sou fã de assistir series e animes, apesar de fazer muito pouco isso hoje em
                dia kkkkkkk
              </p>
              <p style="padding: 10px">
                E, naturalmente, gosto de brincar com minhas duas cachorras, Mel e Pelora, que são
                extremamente carinhosas e brincalhonas. :)
              </p>
            </div>
          </div>
          <div class="todasFotosUm">
            <div class="separa" style="">
              <div>
                <img class="fotoUm" src="../components/paisPorMae.jpeg" alt="" />
              </div>
              <div>
                <img class="fotoDois" src="../components/Praia.jpeg" alt="" />
              </div>
            </div>
            <div class="fotosSemMarg" style="display: flex; gap: 1rem; margin-top: 40px">
              <div>
                <img class="fotoTres" src="../components/pelora.jpeg" alt="" />
              </div>
              <div>
                <img class="fotoQuatro" src="../components/melzinha.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="fotoCachorras"
            style="
              width: 100%;
              height: 35rem;

              display: flex;
              align-items: center;
            "
          >
            <div style="padding-bottom: 50px; width: 50%">
              <div class="titulos">Amo Video Game</div>
              <div class="familia">
                <p style="padding: 10px">
                  Entretanto, minha maior paixão sempre foi, sem dúvida, o videogame. Passei minha
                  vida inteira jogando e lembro com carinho que um dos melhores dias da minha vida
                  foi quando ganhei um PlayStation 2. A empolgação foi tanta que nem consegui dormir
                  naquela noite. Atualmente, dedico-me mais aos jogos no meu computador, um sonho de
                  infância que tive a felicidade de realizar.
                </p>
                <p style="padding: 10px">
                  Não tenho a vergonha de dizer que a minha epoca que eu passava a tarde inteira Não
                  tenho vergonha de admitir que a época em que passava as tardes inteiras jogando no
                  meu PlayStation 2 foi a mais feliz da minha vida. Naquele tempo, meus olhos
                  brilhavam intensamente pelo videogame. Hoje eles ainda brilham, mas não com a
                  mesma intensidade de outrora.
                </p>
                <p style="padding: 10px">
                  Adoro a imersão que a maioria dos jogos nos proporciona; ela me acalma de uma
                  forma única e incomparável.
                </p>
              </div>
            </div>

            <div class="ultimasFotos">
              <img class="fotoTres" src="../components/umplayAi.jpeg" alt="" />
              <img class="fotoQuatro" src="../components/meuPc.jpeg" alt="" />
            </div>
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
.separa {
  display: flex;
  gap: 5rem;
}
.titulos {
  height: 50px;
  display: flex;
  margin-bottom: 40px;
  margin-left: 17px;
  font-size: 45px;
}

.parteMaisCima {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.tituloMenor {
  height: 50px;
  margin-top: 2rem;
  font-size: 30px;
}
.familia {
  width: 32rem;
  height: 50%;
  padding: 10px;

  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
}
.ultimasFotos {
  display: flex;
  position: relative;
  left: 50px;
  bottom: 100px;
  width: 42rem;
}
.quadradoFamilia {
  width: 100%;
  height: 55rem;

  display: flex;
  padding-top: 100px;
  gap: 3rem;
}
.meio {
  width: 85%;
  flex: 1;

  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}
.tituloNovo {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
  margin-top: 50px;
  border-bottom: 2px solid #beb6b6;
}
.fotoUm {
  width: 15rem;
  height: 16rem;
  border: 3px solid black;
  padding: 8px;
}
.fotoDois {
  width: 15rem;
  height: 16rem;
  border: 3px solid black;
  padding: 8px;
}
.fotoTres {
  width: 14rem;
  height: 14rem;
  border: 3px solid black;
  padding: 8px;
}
.fotoQuatro {
  width: 14rem;
  height: 14rem;
  position: relative;
  top: 11rem;
  right: 60px;
  border: 3px solid black;
  padding: 8px;
}
@media screen and (min-width: 610px) and (max-width: 1023px) {
  .familia {
    width: 25rem;
    height: 50%;
    padding: 10px;
    font-size: 11px;
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
  }
  .fotoUm {
    width: 8rem;
    height: 7rem;
    border: 3px solid black;
    padding: 8px;
  }
  .fotoDois {
    width: 8rem;
    height: 7rem;

    border: 3px solid black;
    padding: 8px;
  }
  .separa {
    display: flex;
    gap: 2rem;
  }
  .quadradoFamilia {
    width: 100%;
    height: 34rem;

    display: flex;
    padding-top: 100px;
    gap: 3rem;
  }
  .ultimasFotos {
    display: flex;
    position: relative;

    bottom: 20px;
    left: 150px;
    width: 0 !important;
  }
  .fotoTres {
    width: 8rem;
    height: 7rem;
    border: 3px solid black;
    padding: 8px;
  }
  .fotoQuatro {
    width: 8rem;
    height: 7rem;
    position: relative;
    top: 6rem;
    right: 60px;
    border: 3px solid black;
    padding: 8px;
  }
  .todasFotosUm {
    padding-left: 30px;
  }
  .fotoTres {
    width: 8rem;
    height: 7rem;
    border: 3px solid black;
    padding: 8px;
  }
  .fotoQuatro {
    width: 8rem;
    height: 7rem;
    position: relative;
    top: 6rem;
    right: 60px;
    border: 3px solid black;
    padding: 8px;
  }
}

@media screen and (min-width: 320px) and (max-width: 609px) {
  .familia {
    width: 18rem;
    height: 50%;
    padding: 10px;
    margin-top: 20px;
    font-size: 9px;
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
  }
  .fotoUm {
    width: 8rem;
    height: 7rem;
    border: 3px solid black;
    padding: 8px;
  }
  .fotoDois {
    width: 8rem;
    height: 7rem;

    border: 3px solid black;
    padding: 8px;
  }
  .fotoTres {
    width: 8rem;
    height: 7rem;
    border: 3px solid black;
    padding: 8px;
  }
  .fotoQuatro {
    width: 8rem;
    height: 7rem;
    position: relative;
    top: 6rem;
    right: 60px;
    border: 3px solid black;
    padding: 8px;
  }
  .quadradoFamilia {
    width: 100%;
    height: 34rem;

    display: flex;
    flex-direction: column;
    padding-top: 0px;
    gap: 1rem;
  }
  .separa {
    display: flex;
    gap: 2rem;
  }
  .textoUm {
    padding: 0px !important;
  }
  .fotosSemMarg {
    margin-top: 10px !important;
  }
  .titulos {
    height: 50px;
    display: flex;
    margin-bottom: 0px;
    margin-left: 17px;
    font-size: 28px;
  }
  .fotoCachorras {
    display: flex;
    height: 35rem !important;
    gap: 1rem;
    margin-top: 100px;
    flex-direction: column;
    align-items: normal !important;
  }
  .ultimasFotos {
    margin-top: 0px;
    justify-content: center;
    left: 70px;
    top: -50px;
    width: 10rem !important;
  }
  .tituloMenor {
    height: 50px;
    margin-top: 2rem;
    font-size: 18px;
  }
  .tituloNovo {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 0px;
    margin-top: 0px;
    border-bottom: 2px solid #beb6b6;
  }
  .letraGrande {
    font-size: 25px !important;
  }
  .meio {
  width: 85%;
  flex: 1;

  margin-top: 220px;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}
}
</style>
