<template>
  <transition name="sair">
    <div v-if="fim" class="container">
      <div class="topo">
        <div class="oPeqno">
          <img class="rbolinha" src="./components/icone.png" alt="" />
          <h1 class="profissao" style="color: black; padding-top: 6px">Victor Hugo</h1>
          <h2 class="profissao linha">full-stack programmer</h2>
        </div>

        <div class="quadradinho">ensino</div>
        <div class="quadradinho">cursos</div>
        <div class="quadradinho">empresas</div>
        <div class="quadradinho">pessoal</div>
      </div>

      <div class="parteAbaixo">
        <div class="meio">
          <transition name="toast">
            <div class="ola" v-show="showtoast">
              <div class="oResumme">
                <img
                  class="foto"
                  src="../src/components/WhatsApp Image 2024-06-20 at 12.48.21.jpeg"
                  alt=""
                />
                <div class="resumo letraParaResumi">
                  <h1 class="letraGrande">Victor Hugo</h1>
                  <h3 style="margin-bottom: 10px; margin-left: 15px">Um pouco de mim</h3>
                  <p style="margin-left: 15px">
                    meu nome é Victor Hugo, estou estudando sistema de informação, e trabalho
                    atualmente Sicoob Sarom, Apesar de mexer mais em banco de dados e
                    desenvolvimento de sistemas, meu sonho sempre foi trabalhar em desenvolvimento
                    de jogos, por isso estou estudando algumas linguagem relacionadas a esses ramo.
                    Uma coisa que contribuiu muito para entrar na Sarom, foi que foi aberta uma vaga
                    PCD, e eu tenho autismo nivel 1, tive muita dificuldade em me acostumar no
                    trabalho presencial, mais estou cada dia melhor.
                  </p>
                </div>
              </div>

              <div class="quatroBola">
                <transition name="umPorVez">
                  <button
                    v-if="showtoast1"
                    style="
                      font-weight: 500;
                      background-color: var(--background-color);
                      font-size: 15px;
                      --background-color: #e2e2e2;
                      --accend-color: #bada55;
                    "
                    class="umaBola letraParaResumi btnCircle"
                  >
                    ensino
                  </button>
                </transition>
                <transition name="umPorVez">
                  <button
                    v-if="showtoast2"
                    style="
                      font-weight: 500;
                      background-color: var(--background-color);
                      font-size: 15px;
                      --background-color: #e2e2e2;
                      --accend-color: #eea302;
                    "
                    class="umaBola letraParaResumi btnCircle"
                  >
                    cursos
                  </button>
                </transition>

                <transition name="umPorVez">
                  <button
                    v-if="showtoast3"
                    style="
                      font-weight: 500;
                      background-color: var(--background-color);

                      font-size: 15px;
                      --background-color: #e2e2e2;
                      --accend-color: #80d8da;
                    "
                    class="umaBola letraParaResumi btnCircle"
                  >
                    empresas
                  </button>
                </transition>

                <transition name="umPorVez">
                  <button
                    v-if="showtoast4"
                    style="
                      font-weight: 500;
                      background-color: var(--background-color);
                      font-size: 15px;
                      --background-color: #e2e2e2;
                      --accend-color: #c7c7c7;
                    "
                    class="umaBola letraParaResumi btnCircle"
                  >
                    pessoal
                  </button>
                </transition>
              </div>
            </div>
          </transition>
        </div>

        <div class="fim letraParaResumi links">
          <div style="height: 40px; padding-top: 20px">
            <p style="font-weight: 700">GitHub</p>

            <a class="oLink" href=" https://github.com/victorsiqueira1">
              https://github.com/victorsiqueira1</a
            >
          </div>

          <div style="height: 40px; padding-top: 20px">
            <p style="font-weight: 700">Email</p>

            <a class="oLink"> victorcubas1972@gmail.com</a>
          </div>

          <div style="height: 40px; padding-top: 20px">
            <p style="font-weight: 700">Instagram</p>

            <p class="oLink">victor.hugo.pcs2003</p>
          </div>

          <div style="height: 40px; padding-top: 1.9rem" class="aoba">
            <p class="oLink quemCrio">2024 By Victor Hugo Pedroso.</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
  setTimeout(() => (fim.value = true), 1000)
  setTimeout(() => (showtoast.value = true), 1000)
  setTimeout(() => (showtoast1.value = true), 1300)
  setTimeout(() => (showtoast2.value = true), 1600)
  setTimeout(() => (showtoast3.value = true), 1900)
  setTimeout(() => (showtoast4.value = true), 2200)
})
const fim = ref(false)
const showtoast = ref(false)
const showtoast1 = ref(false)
const showtoast2 = ref(false)
const showtoast3 = ref(false)
const showtoast4 = ref(false)
</script>
<style scoped>
.container {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;

  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  flex-direction: column;
}
/* enter class */
.toast-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.umaBola.btnCircle::before {
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: var(--background-color);
  z-index: -1;
  border-radius: 100%;
  transform: scale(1.5);
  transition: transform 800ms ease-in-out;
}
.umaBola.btnCircle:hover::before,
.umaBola.btnCircle:focus::before {
  transform: scale(0);
}

.umaBola.btnCircle {
  z-index: 1;
  overflow: hidden;
  background-color: var(--accend-color) !important;
}

.toast-enter-active {
  transition: 2s ease;
}
/* leave class */

.sair-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.sair-leave-to {
  opacity: 0;
}
.sair-leave-active {
  transition: all 2.5s ease;
}
/*arrumando as botoes do bola */
/* enter class */
.umPorVez-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.umPorVez-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.umPorVez-enter-active {
  transition: 1.5s ease;
}
.oPeqno {
  display: flex;
}
.aoba {
  font-size: 9px;
  padding-top: 12px;
}
.letraGrande {
  font-size: 80px;
}
.oResumme {
  display: flex;
  width: 100%;
  height: 25rem;
  margin-top: 2rem;
}
.topo {
  height: 50px;
  width: 100%;
  opacity: 0.75;
  display: flex;
  gap: 1px;
  font-size: 15px;
}
.quadradinho {
  width: 80px;
  padding-left: 20px;
  height: 50%;
  border-right: 2px solid rgb(0, 0, 0);
  margin-top: 16px;
}
.rbolinha {
  width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  height: 35px;

  border-radius: 100%;
}
.profissao {
  padding-left: 15px;
}
.linha {
  font-family: 'Playwrite AU VIC', cursive;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}
.parteAbaixo {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.meio {
  width: 65%;
  height: 40rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-left: 5rem;
}
.foto {
  width: 27%;
  height: 90%;
  border-radius: 100%;
  margin-left: 10px;
}
.resumo {
  width: 40%;
  height: 50%;
  margin-left: 5px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  font-size: 12px;
}
.letraParaResumi {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.ola {
  padding-left: 5%;
}
.quemCrio {
  margin-top: 9px;
  font-size: 8px;
}
.quatroBola {
  width: 50%;
  height: 10vh;
  display: flex;
  gap: 10px;
  margin-left: 29%;
  padding-top: 10px;
}
.umaBola {
  width: 8rem;
  height: 13vh;
  border-radius: 100%;
  border: 1px black solid;
  cursor: pointer;
  position: relative !important;
}
.fim {
  width: 100%;
  height: 1vh;
  margin-top: 7rem;

  font-size: 13px;
  padding-left: 70px;
  border-top: 1px solid #c7c7c7;
  display: flex;
  gap: 23rem;
}
.links {
  margin-top: 7px;
  display: flex;
}
.oLink {
  text-decoration: none;
  color: black;
}

@media screen and (min-width: 1024px) and (max-width: 2134px) {
  .container {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    flex-direction: column;
  }
  .umaBola {
    width: 5rem;
    height: 8.5vh;
    border-radius: 100%;
    border: 1px black solid;

    font-size: 12px !important;
  }
  .foto {
    width: 20rem;
    height: 90%;
    border-radius: 100%;
    margin-left: 10px;
  }
  .oResumme {
    display: flex;
    width: 100%;
    height: 18rem;
  }
  .meio {
    width: 75%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 9rem;
    padding-top: 50px;
  }
  .fim {
    width: 100%;
    height: 1vh;
    margin-top: 7rem;
    padding-top: 10px;
    font-size: 13px;
    padding-left: 70px;
    border-top: 1px solid #c7c7c7;
    display: flex;
    gap: 12%;
  }
  .quatroBola {
    width: 65%;
    height: 10vh;
    display: flex;
    gap: 10px;
    margin-left: 43%;

    margin-bottom: 14px;
  }
  .ola {
    width: 100%;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .parteAbaixo {
    width: 100%;
    height: 90%;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .letraParaResumi {
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400 !important;
    font-style: normal;
  }
  .letraGrande {
    font-size: 30px;
    margin-left: 10px;
  }
  .links {
    margin-top: 7px;
    font-size: 10px;
  }
  .resumo {
    width: 46%;
    height: 50%;
    margin-left: 5px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    font-size: 12px;
  }
}
@media screen and (min-width: 610px) and (max-width: 1023px) {
  .container {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 98vw;
    height: 92%;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    flex-direction: column;
  }
  .topo {
    height: 50px;
    width: 100%;
    opacity: 0.75;
    display: flex;
    gap: 1px;
    font-size: 9px;
  }
  .umaBola {
    width: 5rem;
    height: 6.8vh;
    border-radius: 100%;
    border: 1px black solid;
    font-size: 8px !important;
  }
  .foto {
    width: 30%;
    height: 70%;
    border-radius: 100%;
    margin-left: 10px;
    margin-top: 50px;
  }
  .oResumme {
    display: flex;
    margin-top: 0;
    height: 15rem;
  }
  .quadradinho {
    width: 80px;
    padding-left: 20px;
    height: 50%;
    border-right: 2px solid rgb(0, 0, 0);
    margin-top: 10px;
    padding-top: 5px;
  }
  .meio {
    width: 90%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-top: 0px;
    justify-content: center;
  }
  .fim {
    width: 100%;
    height: 1vh;
    padding-bottom: 20px;
    padding-top: 5px;
    font-size: 3px;
    padding-left: 20px;
    border-top: 1px solid #c7c7c7;
    display: flex;
    font-size: 9px;
    gap: 0;
    justify-content: center;
    gap: 15%;
  }
  .quatroBola {
    width: 54%;
    height: 5vh;
    display: flex;
    gap: 10px;
    margin-left: 30vw;
    margin-top: 2rem;
  }
  .ola {
    padding-left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .links {
    margin-top: 7px;
    font-size: 6px;
  }
  .parteAbaixo {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-top: 95px;
  }
  .letraParaResumi {
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 300 !important;
    font-style: normal;
  }
  .letraGrande {
    font-size: 30px;
    margin-left: 10px;
  }
  .resumo {
    width: 55%;
    height: 50%;
    margin-left: 5px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    font-size: 9px;
    padding-top: 50px;
  }
}
@media screen and (min-width: 320px) and (max-width: 610px) {
  .container {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    flex-direction: column;
  }
  .topo {
    height: 50px;
    width: 100%;
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 5px;
  }
  .umaBola {
    width: 3rem;
    height: 9vh;
    border-radius: 100%;
    border: 1px black solid;
    font-size: 8px !important;
  }
  .foto {
    width: 55%;
    height: 70%;
    border-radius: 100%;
    margin-left: 10px;
    margin-top: 50px;
  }
  .oResumme {
    display: flex;
    margin-top: 5rem;
    height: 15rem;
  }
  .aoba {
    font-size: 1px;
    padding-top: 0px;
  }
  .quadradinho {
    width: 80px;
    padding-left: 20px;
    height: 50%;
    border-right: 2px solid rgb(0, 0, 0);
    margin-top: 10px;
    padding-top: 5px;
  }
  .meio {
    width: 70vw;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-left: 0px;
    justify-content: center;
    margin-top: 50px;
  }
  .fim {
    width: 100vw;
    height: 1vh;
    margin-top: 4rem;
    padding-top: 15px;
    font-size: 3px;
    padding-left: 20px;
    border-top: 1px solid #c7c7c7;
    display: flex;
    font-size: 5px;
    gap: 0;
    justify-content: center;
    gap: 7%;
  }
  .quatroBola {
    width: 20rem;
    height: 5vh;
    display: flex;
    gap: 10px;
    margin-left: 40vw;
    margin-top: 3rem;
  }
  .oPeqno {
    display: flex;
  }
  .links {
    margin-top: 7px;
    font-size: 6px;
  }
  .parteAbaixo {
    width: 70%;
    height: 100%;
    flex-direction: column;
    margin-top: 50px;
  }
  .letraParaResumi {
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 300 !important;
    font-style: normal;
  }
  .letraGrande {
    font-size: 13px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .linha {
    font-family: 'Playwrite AU VIC', cursive;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    padding-top: 5px;
  }
  .resumo {
    width: 100%;
    height: 50%;
    margin-left: 5px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    font-size: 6px;
    padding-top: 50px;
  }
}
</style>
