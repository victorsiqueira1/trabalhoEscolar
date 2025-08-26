<template>
  <div class="meio">
    <transition name="toast">
      <div class="container" v-show="showtoast">
        <div class="skills">
          <h4 class="skills_titulo">JORNADA DE ENSINO E SKILLS</h4>
          <div class="skills_cursosUM">
            <h3 style="padding-bottom: 15px">Cursos Alura</h3>
            <nav class="skills_cursosUM letrapeq" style="display: flex; font-weight: 600">
              2025-2025
              <p style="padding-left: 5px; font-weight: 600">
                Vue 3: entendendo componentes, diretivas e reatividade no framework.
              </p>
            </nav>
            <div class="skills_cursosUM_resumo">
              <nav style="font-size: 13px">
                nesse curso eu estudei mais sobre o framework de vue, como funciona as configurações
                do vue, os elementos que o vue 3 disponibiliza, alem de aprender um pouco de
                typescript.
              </nav>
            </div>
          </div>
          <div class="skills_cursosDOIS">
            <nav class="skills_cursosDOISM letrapeq" style="display: flex; font-weight: 600">
              2024-2025
              <p style="padding-left: 5px; font-weight: 600">
                JavaScript: utilizando tipos, variáveis e funções
              </p>
            </nav>
            <div class="skills_cursosDOIS_resumo">
              <nav style="font-size: 13px">
                nesse curso eu reforcei meu estudos de JavaScript, principalmente o funcionamento
                das funções e separação de elementos.
              </nav>
            </div>
          </div>
          <div class="skills_cursosTRES">
            <nav class="skills_cursosTRES letrapeq" style="display: flex; font-weight: 600">
              2024-2025
              <p style="padding-left: 5px; font-weight: 600">JavaScript: métodos de array</p>
            </nav>
            <div class="skills_cursosTRES_resumo">
              <nav style="font-size: 13px">
                um curso focado em metodos de arrays mais conhecido, para melhorar minha habilidade
                de manipulação de arrays
              </nav>
            </div>
          </div>
          <div class="skills_cursosQUATRO">
            <nav class="skills_cursosQUATRO letrapeq" style="display: flex; font-weight: 600">
              2024-2025
              <p style="padding-left: 5px; font-weight: 600">
                JavaScript: programação Orientada a Objetos
              </p>
            </nav>
            <div class="skills_cursosQUATRO_resumo">
              <nav style="font-size: 13px">
                um curso focado na separação do codigo em objetos menores, diminuindo linhas de
                codigo e tornando o mesmo um estilo bem atual e organizado
              </nav>
            </div>
          </div>
          <div class="skills_cursosCINCO">
            <nav class="skills_cursosCINCO letrapeq" style="display: flex; font-weight: 600">
              2024-2025
              <p style="padding-left: 5px; font-weight: 600">
                JavaScript com Node.js: criando sua primeira biblioteca
              </p>
            </nav>
            <div class="skills_cursosCINCO_resumo">
              <nav style="font-size: 13px">
                nesse curso aprendi a como lidar com blibliotecas publicas, podendo alimentar minha
                pagina Web
              </nav>
            </div>
          </div>
          <div class="skills_cursosSEIS">
            <nav class="skills_cursosSEIS letrapeq" style="display: flex; font-weight: 600">
              2024-2025
              <p style="padding-left: 5px; font-weight: 600">JavaScript: conhecendo objetos</p>
            </nav>
            <div class="skills_cursosSEIS_resumo">
              <nav style="font-size: 13px">
                fiz esse curso principalmente para melhorar meu conhecimento de objetos, já que
                ainda estava confuso com algumas coisas mais basicas sobre objetos
              </nav>
            </div>
          </div>
          <div class="skills_cursosSETE">
            <nav class="skills_cursosSETE letrapeq" style="display: flex; font-weight: 600">
              2024-2025
              <p style="padding-left: 5px; font-weight: 600">
                JavaScript: manipulando elementos no DOM
              </p>
            </nav>
            <div class="skills_cursosSETE_resumo">
              <nav style="font-size: 13px">
                fiz esse curso para reforçar meu aprendizado em JavaScript, mesmo sendo um curso
                simples e bem inicial, tirou muitas duvidas de coisas que eu fazia de forma
                automatica sem saber o por que estar fazendo aquilo
              </nav>
            </div>
          </div>
        </div>

        <div class="ensinos">
          <div class="quadrad">
            <p class="letrapeq" style="padding-top: 9px">2006-2019</p>
            <div class="parte">
              <h4>Status ou Poliedro</h4>
              <p class="fonteText letrapeq">
                fiz meu ensino fudamental I e II no Status, hoje conhecido como Poliedro
              </p>
            </div>
          </div>
          <br />
          <div class="quadrad">
            <p class="letrapeq" style="padding-top: 9px">2019-2021</p>
            <div class="parte">
              <h4>EE Nossa Senhora Da Penha</h4>
              <p class="fonteText letrapeq">
                fiz meu ensino medio na escola EE Nossa Senhora Da Penha
              </p>
            </div>
          </div>
          <br />

          <div class="quadrad">
            <p class="letrapeq" style="padding-top: 9px">2022-Now</p>
            <div class="parte">
              <h4>Sicoob Sarom</h4>
              <p class="fonteText letrapeq">
                Hoje trabalho como Desenvolvedor de Sistemas na Sicoob Sarom
              </p>
            </div>
          </div>
          <br />
          <div class="quadrad">
            <p class="letrapeq" style="padding-top: 9px">2023-Now</p>
            <div class="parte">
              <h4>Cruzeiro do Sul polo UNIFRAN</h4>
              <p class="fonteText letrapeq">Hoje faço faculdade na Cruzeiro do Sul polo UNIFRAN</p>
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
.container {
  width: 100%;
  height: 37rem;
  display: flex;
  flex-direction: row;
  align-items: normal;
  gap: 200px;
  font-family: 'Work Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  padding-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e2e2;
  justify-content: center;
}

.skills {
  width: 100%;
}

.skills_titulo {
  padding-top: 25px;
  padding-bottom: 25px;
}
.skills_cursosUM_resumo {
  padding-top: 3px;
  padding-bottom: 4px;
}
.skills_cursosDOIS {
  padding-top: 8px;
}
.skills_cursosTRES {
  padding-top: 8px;
}
.skills_cursosQUATRO {
  padding-top: 8px;
}
.skills_cursosCINCO {
  padding-top: 8px;
}
.skills_cursosSEIS {
  padding-top: 8px;
}
.skills_cursosSETE {
  padding-top: 8px;
}
.meio {
  width: 85%;
  flex: 1;
  padding-top: 0px;
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin-left: 5rem;
  padding-top: 30px;
}
.ensinos {
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-top: 70px;

  height: 100%;
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
.parte {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 5px;
  padding-left: 30px;
  width: 25rem;
}
.fonteText {
  font-family: 'Work Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
.quadrad {
  display: flex;
  padding-left: 20px;
}
.letrapeq {
  font-size: 12px;
}

@media screen and (min-width: 610px) and (max-width: 1023px) {
  .ensinos {
    display: flex;
    flex-direction: column;
    width: 55%;
    padding-top: 70px;
    padding-left: 50px;
    height: 100%;
  }
  .meio {
    width: 85%;
    flex: 1;
    padding-top: 0px;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    margin-left: 0rem;
    padding-top: 30px;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: normal;
    gap: 100px;
    font-family: 'Work Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    padding-left: 0px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid #e2e2e2;
    justify-content: center;
  }
}
@media screen and (min-width: 320px) and (max-width: 609px) {
  .meio {
    width: 85%;
    flex: 1;
    padding-top: 0px;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    margin-left: 0rem;
    padding-top: 150px;
  }
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: normal;
    gap: 50px;
    font-family: 'Work Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    padding-left: 0px;
    padding-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid #e2e2e2;
    justify-content: center;
  }

  .ensinos {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 0px;

    height: 100%;
  }
}
</style>
