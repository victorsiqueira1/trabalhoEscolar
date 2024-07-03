<template>
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
    <router-view class="meio"></router-view>
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
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
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
.quadradinho {
  width: 80px;
  padding-left: 20px;
  height: 50%;
  border-right: 2px solid rgb(0, 0, 0);
  margin-top: 16px;
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
  padding-bottom: 50px;
  display: flex;
  align-items: center;
  margin-left: 5rem;
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
  padding-bottom: 50px;
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

    padding-top: 30px;
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
    width: 98vw;

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
@media screen and (min-width: 320px) and (max-width: 610px) {
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
