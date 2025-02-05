<template>
  <div v-if="fim" class="container">
    <div class="topo">
      <div class="oPeqno">
        <img class="rbolinha" src="./components/fita.png" alt="" />
        <h1 class="profissao" style="color: black; padding-top: 6px">Victor Hugo</h1>
        <h2 class="profissao2 linha">full-stack programmer</h2>
      </div>
      <router-link class="tamanho" style="text-decoration: none; color: rgb(0, 0, 0)" to="/resume">
        <div class="quadradinho">Resumo</div>
      </router-link>
      <router-link
        class="tamanho"
        style="text-decoration: none; color: rgb(0, 0, 0)"
        to="/projetos"
      >
        <div class="quadradinho">Projetos</div>
      </router-link>
      <router-link
        class="tamanho"
        style="text-decoration: none; color: rgb(0, 0, 0)"
        to="/empresas"
      >
        <div class="quadradinho">Empresas</div>
      </router-link>
      <router-link class="tamanho" style="text-decoration: none; color: rgb(0, 0, 0)" to="/pessoal">
        <div class="quadradinho">Pessoal</div>
      </router-link>
      <router-link class="tamanho" style="text-decoration: none; color: rgb(0, 0, 0)" to="/">
        <div class="quadradinho" style="border-right: 2px solid rgb(0, 0, 0)">Inicio</div>
      </router-link>
    </div>
    <router-view></router-view>
    <div class="parteAbaixo">
      <div class="fim letraParaResumi links">
        <div style="height: 40px; padding-top: 20px">
          <p style="font-weight: 700">GitHub</p>

          <a class="oLink" href=" https://github.com/victorsiqueira1">
            https://github.com/victorsiqueira1</a
          >
        </div>

        <div style="height: 40px; padding-top: 20px">
          <p style="font-weight: 700">Email</p>

          <a class="oLink letraParaResumi"> victorcubas1972@gmail.com</a>
        </div>

        <div style="height: 40px; padding-top: 20px">
          <p style="font-weight: 700">Instagram</p>

          <p class="oLink letraParaResumi">victor.hugo.pcs2003</p>
        </div>

        <div style="height: 40px; padding-top: 1.9rem" class="aoba">
          <p class="oLink letraParaResumi quemCrio">2024 By Victor Hugo Pedroso.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

onMounted(() => {
  setTimeout(() => (fim.value = true), 1000)
})
const fim = ref(false)
</script>
<style scoped>
.container {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  padding: 0;
  margin: 0;
  flex-direction: column;
}
.letraParaResumi {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
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

.oPeqno {
  display: flex;
}
.aoba {
  font-size: 9px;
  padding-top: 12px;
}

.topo {
  height: 50px;
  width: 100%;
  opacity: 0.75;
  display: flex;
  gap: 1px;
  font-size: 15px;
}
.profissao2 {
  padding-left: 0px;
  width: 20rem;
  margin-right: 0px;
}
.quadradinho::before {
  color: rgb(0, 0, 0);
  transition: transform 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  z-index: -1;
}
.quadradinho:hover,
.quadradinho:focus {
  color: rgb(10, 150, 150);
}
.quadradinho:hover:before,
.quadradinho:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.quadradinho:active {
  transform: scale(0.9);
}
.quadradinho {
  width: 80px;
  padding-left: 17px;
  height: 65%;

  border-bottom: 2px solid rgb(0, 0, 0);
  border-left: 2px solid rgb(0, 0, 0);
  padding-top: 6px;
  transition: 1s ease all;
  z-index: 1;
  cursor: pointer;
}
.rbolinha {
  width: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  height: 35px;

  border-radius: 100%;
}
.meio {
  width: 85%;
  flex: 1;
  padding-top: 70px;
  display: flex;
  align-items: center;
  margin-left: 5rem;
}
.profissao {
  padding-left: 15px;
  margin-right: 50px;
}
.linha {
  font-family: 'Playwrite AU VIC', cursive;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
  padding-right: 40px;
}
.parteAbaixo {
  width: 100%;
  padding-bottom: 40px;
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

.ola {
  padding-left: 5%;
}
.quemCrio {
  margin-top: 9px;
  font-size: 8px;
}

.fim {
  width: 100%;

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
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    flex-direction: column;
  }

  .meio {
    width: 75%;

    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
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

  .parteAbaixo {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .links {
    margin-top: 7px;
    font-size: 12px;
  }
}
@media screen and (min-width: 610px) and (max-width: 1023px) {
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
  .quadradinho {
    width: 50px !important;
    padding-left: 17px;
    height: 65%;
    font-size: 10 !important;
    border-bottom: 2px solid rgb(0, 0, 0);
    border-left: 2px solid rgb(0, 0, 0);
    padding-top: 6px;
    transition: 1s ease all;
    z-index: 1;
    cursor: pointer;
  }

  .topo {
    height: 50px;
    width: 100%;
    opacity: 0.75;
    display: flex;
    gap: 1px;
    font-size: 9px;
  }
  .profissao {
    padding-left: 0px;
    width: 5rem;
    margin-right: 0px;
  }
  .profissao2 {
    padding-left: 10px;
    width: 14rem;
    margin-right: 0px;
    width: 13rem;
  }
  .linha {
    padding-right: 0px;
  }

  .quadradinho {
    width: 80px;
    padding-left: 10px;
    height: 50%;
    border-right: 2px solid rgb(0, 0, 0);
    margin-top: 10px;
    padding-top: 5px;
  }
  .aoba {
    font-size: 1px;
    padding: 15px !important;
  }
  .meio {
    width: 90%;

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

  .links {
    margin-top: 7px;
    font-size: 6px;
  }
  .parteAbaixo {
    width: 100%;

    flex-direction: column;
    padding-top: 25px;
  }
}
@media screen and (min-width: 320px) and (max-width: 609px) {
  .container {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    min-height: 150vh;
    display: flex;
    align-items: center;
    background-color: #f3f3f3;
    flex-direction: column;
  }
  .quemCrio {
    font-size: 7px;
  }
  .topo {
    height: 50px;
    width: 60%;
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 9px;
  }
  .profissao {
    padding: 0;
    margin: 0;
    width: 55px;
    font-size: 13px;
  }
  .profissao2 {
    padding-left: 0px;
    width: 11rem;
    font-size: 10px;
  }
  .tamanho {
    width: 80px;
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
    padding-top: 16px !important;
  }
  .quadradinho {
    width: 80px;
    padding-left: 22px;
    height: 50%;
    border-right: 2px solid rgb(0, 0, 0);
    border-top: 2px solid rgb(0, 0, 0);
    margin-top: 10px;
    padding-top: 1px;

    padding-bottom: 5px;
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
    padding-top: 0;
    border-top: 1px solid #c7c7c7;
    display: flex;
    font-size: 5px;
    gap: 0;
    justify-content: center;
    gap: 3%;
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
    flex-direction: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0;
    font-size: 8px;
  }
  .links {
    margin-top: 7px;
    font-size: 6px;
  }

  .parteAbaixo {
    width: 70%;

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
