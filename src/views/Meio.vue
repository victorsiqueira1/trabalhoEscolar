<template>
  <div class="meio">
    <transition name="toast">
      <div class="ola" v-show="showtoast">
        <div class="oResumme">
          <img class="foto" src="../components/euSarom.jpeg" alt="" />
          <div class="resumo letraParaResumi">
            <h1 class="letraGrande">Victor Hugo</h1>
            <h3 style="margin-bottom: 10px; margin-left: 15px">Um pouco de mim</h3>
            <p style="margin-left: 15px">
              meu nome é Victor Hugo, estou estudando sistema de informação, e trabalho atualmente
              Sicoob Sarom, Apesar de mexer mais em banco de dados e desenvolvimento de sistemas,
              meu sonho sempre foi trabalhar em desenvolvimento de jogos, por isso estou estudando
              algumas linguagem relacionadas a esses ramo. Uma coisa que contribuiu muito para
              entrar na Sarom, foi que foi aberta uma vaga PCD, e eu tenho autismo nivel 1, tive
              muita dificuldade em me acostumar no trabalho presencial, mais estou cada dia melhor.
            </p>
          </div>
        </div>

        <div class="quatroBola">
          <router-link to="/resume">
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
                Resumo
              </button>
            </transition>
          </router-link>

          <router-link to="/projetos">
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
                Projetos
              </button>
            </transition>
          </router-link>
          <router-link to="/empresas">
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
                Empresas
              </button>
            </transition>
          </router-link>
          <router-link to="/pessoal">
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
                Pessoal
              </button>
            </transition>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const showtoast = ref(false)
const showtoast1 = ref(false)
const showtoast2 = ref(false)
const showtoast3 = ref(false)
const showtoast4 = ref(false)
onMounted(() => {
  setTimeout(() => (showtoast.value = true), 500)
  setTimeout(() => (showtoast1.value = true), 1300)
  setTimeout(() => (showtoast2.value = true), 1600)
  setTimeout(() => (showtoast3.value = true), 1900)
  setTimeout(() => (showtoast4.value = true), 2200)
})
</script>
<style scoped>
.ola {
  padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
  width: 100%;
  height: 100%;
}
.meio {
  width: 85%;
  flex: 1;
  padding-top: 70px;
  display: flex;
  align-items: center;
  margin-left: 5rem;
}
.foto {
  width: 22%;
  height: 90%;
  border-radius: 100%;
  margin-left: 10px;
}
.oResumme {
  display: flex;
  width: 100%;
  height: 25rem;
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
.letraGrande {
  font-size: 80px;
}
.quatroBola {
  width: 50%;
  height: 10vh;
  display: flex;
  gap: 10.5rem;

  padding-top: 10px;
}
.umPorVez-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.umPorVez-enter-to {
  opacity: 1;
  transform: translateY(0);
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
.umPorVez-enter-active {
  transition: 1.5s ease;
}

.sair-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.sair-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
.sair-leave-active {
  transition: all 2.5s ease;
}
.umaBola {
  width: 8rem;
  height: 13vh;
  border-radius: 100%;
  border: 1px black solid;
  cursor: pointer;
  position: absolute;
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
  transition: transform 800ms ease-in;
}
.umaBola.btnCircle:hover::before,
.umaBola.btnCircle:focus::before {
  transform: scale(1);
}

.umaBola.btnCircle {
  z-index: 1;
  overflow: hidden;
  background-color: var(--accend-color) !important;
}
.letraParaResumi {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
@media screen and (min-width: 1024px) and (max-width: 2134px) {
  .umaBola {
    width: 6rem;
    height: 12vh;
    border-radius: 100%;
    border: 1px black solid;

    font-size: 12px !important;
  }
  .foto {
    width: 17rem;
    height: 90%;
    border-radius: 100%;
    margin-left: 10px;
  }
  .quatroBola {
    width: 65%;
    height: 10vh;
    display: flex;
    gap: 7rem;
    margin-left: 18rem;
    padding-top: 0px;
    padding-bottom: 20px;
    margin-bottom: 14px;
  }
  .ola {
    padding-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0rem;
    width: 100%;
    height: 100%;
    padding-top: 0;
  }
  .oResumme {
    display: flex;
    width: 100%;
    height: 17rem;
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
@media screen and (min-width: 611px) and (max-width: 1023px) {
  .umaBola {
    width: 4rem;
    height: 8.5vh;
    border-radius: 100%;
    border: 1px black solid;
    font-size: 9px !important;
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
  .meio {
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin: 0;
    padding-top: 0px;
    justify-content: center;
  }
  .ola {
    padding-left: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  .quemCrio {
    margin-top: 9px;
    font-size: 7px !;
  }
  .quatroBola {
    width: 64%;
    height: 5vh;
    display: flex;
    gap: 4.5rem;
    margin-left: 25vw;
    margin-top: 2rem;
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
@media screen and (min-width: 320px) and (max-width: 609px) {
  .umaBola {
    width: 3rem;
    height: 7.5vh;
    border-radius: 100%;
    border: 1px black solid;
    background-color: none !important;
    font-size: 9px !important;
  }
  .foto {
    width: 42%;
    height: 60%;
    border-radius: 100%;
    margin-left: 10px;
    margin-top: 50px;
  }
  .oResumme {
    display: flex;
    flex-direction: column;
    margin-top: 0;
    justify-content: center;
    align-items: center;
    height: 15rem;
  }
  .meio {
    width: 100%;
    height: 100%;

    flex-direction: column;
    display: flex;
    align-items: center;
    margin: 0;
    padding-top: 0px;
    justify-content: center;
  }
  .ola {
    padding-left: 0%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    margin-bottom: 100px;
  }
  .quemCrio {
    margin-top: 9px;
    font-size: 7px !;
  }
  .quatroBola {
    width: 64%;
    height: 5vh;
    display: flex;
    gap: 3.8rem;
    position: absolute;
    top: 124%;
    margin-left: 12.5vw;
    margin-top: 1rem;
    background-color: none;
  }
  .letraParaResumi {
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 700 !important;
    font-style: normal;
  }
  .letraGrande {
    font-size: 30px;
    margin-left: 10px;
  }
  .resumo {
    width: 85%;
    height: 60%;
    margin-left: 5px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    font-size: 11px;
    padding-top: 50px;
  }
}
</style>
