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
        <div class="meio_primeiro_projeto">
          <h1 class="titulo">Projeto para Conta Hitorias Que sera Refeito!</h1>
          <div class="meio_primeiro_projeto-explicacao_doPrimeiroProjeto">
            <nav>
              <section id="projeto-historias-front" class="oResumoDoProjeto">
                <header class="meio_primeiro_projeto-header">
                  <div class="meio_primeiro_projeto_texto">SW</div>
                  <div>
                    <h2 class="titulo" style="margin: 0; ">
                      Histórias Front — Star Wars Alternativo
                    </h2>
                    <p style="margin: 4px 0 0; color: #555">
                      Projeto pessoal — SPA em Vue 3, feito para treinar autenticação, rotas e
                      estado global.
                    </p>
                  </div>
                </header>

                <main style="margin-top: 18px; color: #333; line-height: 1.6">
                  <p>
                    Desenvolvi este projeto para praticar o ecossistema moderno de
                    <strong>Vue</strong>. A ideia foi montar uma aplicação simples, mas completa,
                    com fluxo de login, navegação entre telas e integração com APIs externas. Não é
                    apenas um exercício visual — foi também um teste de arquitetura: estrutura dos
                    componentes, gerenciamento de estado e deploy.
                  </p>

                  <p>O que implementei na prática:</p>

                  <ul style="margin: 8px 0 16px 20px; color: #333">
                    <li>
                      <strong>Vue 3 (Composition API)</strong> — organização dos componentes e
                      lógica reativa.
                    </li>
                    <li>
                      <strong>Pinia</strong> — estado global para manter o app previsível e fácil de
                      debugar.
                    </li>
                    <li>
                      <strong>Vue Router</strong> — rotas e transições sem recarregar a página.
                    </li>
                    <li>
                      <strong>Axios</strong> — chamadas HTTP para buscar/mostrar dados (simulando
                      integrações reais).
                    </li>
                    <li>
                      <strong>Vite</strong> — build rápida e ótimo DX (hot-reload, builds leves).
                    </li>
                  </ul>

                  <p>
                    Chamei o projeto de <em>Star Wars Alternativo</em> por conta da inspiração
                    temática inicial, mas o foco foi técnico: construir algo que eu realmente
                    conseguisse manter e evoluir. Algumas decisões que tomei e que podem interessar:
                  </p>

                  <ul style="margin: 8px 0 16px 20px; color: #333">
                    <li>Separação clara entre apresentação e lógica (components / composables).</li>
                    <li>
                      Pinia para evitar prop drilling e centralizar a autenticação e estado do
                      usuário.
                    </li>
                    <li>Rotas protegidas para telas que exigem login.</li>
                    <li>
                      Deploy no Vercel para facilitar demonstração e testes por outras pessoas.
                    </li>
                  </ul>

                  <p>
                    Aprendi muito com esse projeto — principalmente sobre organização de pastas,
                    fluxo de autenticação e como manter o código simples quando a aplicação cresce.
                    Se quiser, posso disponibilizar no repositório os pontos que considero mais
                    interessantes (coments nos componentes, readme com arquitetura e scripts de
                    deploy).
                  </p>

                  <p style="margin-top: 18px">
                    <a
                      href="https://historias-front.vercel.app/login"
                      target="_blank"
                      rel="noopener"
                      style="
                        display: inline-block;
                        padding: 10px 14px;
                        border-radius: 8px;
                        background: #111827;
                        color: #fff;
                        text-decoration: none;
                        font-weight: 600;
                      "
                    >
                      Ver site →
                    </a>
                    <small style="margin-left: 12px; color: #666">(deploy: Vercel)</small>
                  </p>
                </main>

                <footer
                  style="
                    margin-top: 20px;
                    border-top: 1px solid #f0f0f0;
                    padding-top: 12px;
                    color: #666;
                    font-size: 13px;
                  "
                >
                  Tecnologias: Vue 3 · Pinia · Vue Router · Axios · Vite · Vercel
                </footer>
              </section>
            </nav>
          </div>
        </div>
        <div class="meio_segundo_projeto">
          <h1 class="titulo">Projeto Cyberpunk Fanpage</h1>
          <div class="meio_segundo_projeto-explicacao_doSegundoProjeto">
            <nav>
              <section id="projeto-cyberpunk" class="oResumoDoProjeto">
                <header class="meio_segundo_projeto-header">
                  <div class="meio_segundo_projeto_texto">CP</div>
                  <div>
                    <h2 class="titulo" style="margin: 0;">Cyberpunk Site — Fanpage Interativa</h2>
                    <p style="margin: 4px 0 0; color: #555">
                      Projeto pessoal — página estática feita em HTML, CSS e JS para treinar
                      responsividade, dark mode e links externos.
                    </p>
                  </div>
                </header>

                <main style="margin-top: 18px; color: #333; line-height: 1.6">
                  <p>
                    Criei este projeto como um exercício de front-end simples, mas com foco visual.
                    A ideia foi desenvolver uma fanpage inspirada no universo
                    <strong>Cyberpunk 2077</strong> e no anime <em>Edgerunners</em>, explorando
                    elementos de layout, design responsivo e interatividade sem uso de frameworks.
                  </p>

                  <p>O que implementei na prática:</p>
                  <ul style="margin: 8px 0 16px 20px; color: #333">
                    <li>
                      <strong>HTML + CSS + JS puro</strong> — estrutura, estilização e
                      interatividade sem dependências externas.
                    </li>
                    <li>
                      <strong>Dark Mode</strong> — alternância entre tema claro e escuro com botão
                      customizado.
                    </li>
                    <li>
                      <strong>Links externos</strong> — integração com matérias, críticas e trailers
                      relacionados ao jogo e anime.
                    </li>
                    <li>
                      <strong>Imagens e GIFs</strong> — reforço da estética cyberpunk com recursos
                      visuais animados.
                    </li>
                    <li>
                      <strong>Responsividade</strong> — adaptação do layout para diferentes tamanhos
                      de tela.
                    </li>
                  </ul>

                  <p>
                    Este projeto foi um passo importante para treinar conceitos básicos de
                    front-end: trabalhar a experiência visual, aplicar animações e entender melhor
                    como estruturar uma página estática do zero. Foi também uma oportunidade de
                    explorar meu interesse pela temática cyberpunk.
                  </p>

                  <p style="margin-top: 18px">
                    <a
                      href="https://sitecyber.vercel.app/"
                      target="_blank"
                      rel="noopener"
                      style="
                        display: inline-block;
                        padding: 10px 14px;
                        border-radius: 8px;
                        background: #111827;
                        color: #fff;
                        text-decoration: none;
                        font-weight: 600;
                      "
                    >
                      Ver site →
                    </a>
                    <small style="margin-left: 12px; color: #666">(deploy: Vercel)</small>
                  </p>
                </main>

                <footer
                  style="
                    margin-top: 20px;
                    border-top: 1px solid #f0f0f0;
                    padding-top: 12px;
                    color: #666;
                    font-size: 13px;
                  "
                >
                  Tecnologias: HTML · CSS · JavaScript · Vercel
                </footer>
              </section>
            </nav>
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
.oResumoDoProjeto {
  max-width: 900px;
  margin: 15px auto;

  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
}
.meio_primeiro_projeto {
  height: 100%;
  width: 100%;
  margin: 20px auto; /* mais espaçamento externo */
  padding: 24px; /* respiro interno */

  border-radius: 12px;
  background: #fff;

  /* borda para reforçar o quadrado */
  border: 1px solid rgba(0, 0, 0, 0.12);

  /* sombra mais forte */
  box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.12);
}
.meio_primeiro_projeto-header {
  display: flex;
  align-items: center;
  gap: 16px;
}
.meio_segundo_projeto-header {
  display: flex;
  align-items: center;
  gap: 16px;
}
.meio_segundo_projeto_texto {
  width: 89px;
  height: 64px;
  border-radius: 8px;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
}
.meio_primeiro_projeto_texto {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
}
.meio_segundo_projeto {
  height:100%;
  width: 100%;
  margin: 20px auto; /* mais espaçamento externo */
  padding: 24px; /* respiro interno */

  border-radius: 12px;
  background: #fff;

  /* borda para reforçar o quadrado */
  border: 1px solid rgba(0, 0, 0, 0.12);

  /* sombra mais forte */
  box-shadow: 4px 6px 20px rgba(0, 0, 0, 0.12);
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
  .titulo{
    font-size: 12px;
  }
  .oResumoDoProjeto {
  max-width: 900px;
  margin: 15px auto;

  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-size: 8px;
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
