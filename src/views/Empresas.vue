<template>
  <div class="container">
    <transition name="toast">
      <div class="empresas" v-show="showtoast">
        <div class="primi">
          <h2 class="letraParaResumi">Todas as empresas que eu trabalhei ou Trabalho</h2>
          <div class="textoUm">
            <p>
              aqui é um resumo de todas as empresas que passei, espero sempre almentar essa lista :)
            </p>
          </div>
        </div>
        <div style="height: 100%">
          <div style="padding-bottom: 20px">
            <img
              style="width: 15rem; height: 4.4rem"
              src="../components/agorasimSarom.png"
              alt=""
            />
          </div>
          <div style="display: flex; padding-top: 10px">
            <div class="textoUm" style="display: flex; flex-direction: column; gap: 50px">
              <div class="otextao">
                Com 33 anos de tradição, a Sarom – cooperativa de crédito que faz parte do Sistema
                Sicoob - nasceu com um único objetivo: oferecer serviços financeiros básicos para a
                comunidade. Idosos viajavam por uma estrada de terra para receber suas
                aposentadorias. Comerciantes sofriam sem capital e esperança. O queijo era ilegal e
                havia apenas alguns pés de café. Jovens e adolescentes buscavam por conhecimento em
                outros municípios e não voltavam. O desemprego era evidente na região. E assim, a
                cidade morria aos poucos. Mas, com união e coerência, a cooperativa de crédito
                fundada no interior de Minas Gerais conta hoje com 26 agências localizadas no
                Centro-Oeste, Sul, Alto Paranaíba e Sudoeste de Minas, além do Vale do Ribeira em
                São Paulo, e mais de 46 mil associados – que são, na verdade, os donos da
                cooperativa.
              </div>
              <div class="otextao">
                Em 2022, a Sarom foi destaque mundial com o prêmio de Reconhecimento Inovação com
                Propósito (RECIP), promovido pelo Instituto Fenasbac, ligado ao Banco Central. Tudo
                isso só foi possível porque a Sarom é movida pelo propósito de “Inspirar Pessoas
                Para Transformar Realidades” e pratica o cooperativismo que gera resultados para
                todos. Foram investidos R$ 30 milhões em ações de desenvolvimento local e
                participação nos resultados, nos últimos 5 anos, beneficiando milhares de pessoas.
                No primeiro quadrimestre de 2023, a cooperativa alcançou a marca histórica de R$ 1
                Bilhão em Volume Financeiro, ou seja, a soma de ativos (R$ 907 milhões),
                coobrigações (R$ 78,3 milhões) e poupança (R$ 25,8 milhões). A carteira de crédito
                atingiu R$ 590,9 milhões e o patrimônio líquido R$ 99,8 milhões.
              </div>
              <div class="otextao">
                A fim de valorizar o relacionamento e singularidade, a Sarom desenvolveu um modelo
                próprio de gestão, que permite cada agência atuar como agente de desenvolvimento
                local, o que impulsiona o empreendedorismo, geração de emprego e renda e identifica
                as potencialidades econômicas de cada município de atuação, em parceria com
                instituições representativas – públicas e privadas nos três níveis de federação.
              </div>
            </div>
            <div class="grupoFoto">
              <img class="fotoQuatro" src="../components/euComColegas.jpeg" alt="" />
              <img class="fotoQuatro2" style="" src="../components/euComColegas2.jpeg" alt="" />
            </div>
          </div>
        </div>
        <h1 style="width: 100%; text-align: center">...</h1>
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
  margin-bottom: 30px;
  margin-left: 2rem;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(60px);
}
.otextao {
  width: 80%;
}
.primi {
  width: 100%;
  height: 35%;
  border-bottom: 1px solid #beb6b6;
  padding-bottom: 30px;
  margin-top: 50px;
}
.grupoFoto {
  width: 40%;
}
.letraParaResumi {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  height: 50px;
  margin-bottom: 50px;
  font-style: normal;
}
.textoUm {
  width: 55%;
  height: 40% !important;

  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  height: 50px;
  font-style: normal;

  margin-top: 30px;
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-enter-active {
  transition: 2s ease;
}
.empresas {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: normal;
  gap: 50px;
  font-family: 'Work Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  padding-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e2e2;
  justify-content: center;
}
.fotoQuatro {
  width: 20rem;
  height: 13rem;
  padding: 10px;
  border: 3px solid black;
}
.fotoQuatro2 {
  width: 20rem;
  height: 13rem;
  padding: 10px;
  border: 3px solid black;
  position: relative;

  top: -50px;
  left: 220px;
}
@media screen and (min-width: 1883px) and (max-width: 3000px) {
  .container {
    width: 85%;
    flex: 1;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 2rem;
  }
  .toast-enter-from {
    opacity: 0;
    transform: translateY(60px);
  }
  .otextao {
    width: 80%;
  }
  .primi {
    width: 100%;
    height: 35%;
    border-bottom: 1px solid #beb6b6;
    padding-bottom: 30px;
    margin-top: 50px;
  }
  .grupoFoto {
    width: 40%;
  }
  .letraParaResumi {
    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    height: 50px;
    margin-bottom: 50px;
    font-style: normal;
  }
  .textoUm {
    width: 55%;
    height: 40% !important;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    height: 50px;
    font-style: normal;

    margin-top: 30px;
  }
  .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .toast-enter-active {
    transition: 2s ease;
  }
  .empresas {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap: 50px;
    font-family: 'Work Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    padding-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid #e2e2e2;
    justify-content: center;
  }
  .fotoQuatro {
    width: 20rem;
    height: 13rem;
    padding: 10px;
    border: 3px solid black;
  }
  .fotoQuatro2 {
    width: 20rem;
    height: 13rem;
    padding: 10px;
    border: 3px solid black;
    position: relative;

    top: 160px;
    left: -70px;
  }
}

@media screen and (min-width: 610px) and (max-width: 1023px) {
  
  .textoUm {
    width: 50%;
    height: 40% !important;

    font-family: 'Montserrat', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    height: 50px;
    font-style: normal;
    font-size: 11px;
    margin-top: 30px;
  }
  .otextao {
    width: 95%;
  }
  .grupoFoto {
    width: 40%;
    padding-top: 140px;
    position: relative;
    bottom: 60px;
    left: 80px;
  }
  .fotoQuatro {
    width: 10.5rem;
    height: 8rem;
    padding: 10px;
    border: 3px solid black;
    position: relative;

    bottom: 50px;
  }
  .fotoQuatro2 {
    width: 10.5rem;
    height: 8rem;
    padding: 10px;
    border: 3px solid black;
    position: relative;
    bottom: 0px;
    top: -90px;
    left: 100px;
  }
}
</style>
