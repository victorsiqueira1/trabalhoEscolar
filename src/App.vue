<template>
  <div class="container">
    <div class="topo">
      <img class="rbolinha" src="./components/icone.png" alt="" />

      <h1 style="color: black; padding-top: 6px">Victor Hugo</h1>
      <h2 class="profissao linha">full-stack programmer</h2>
      <div class="quadradinho">ensino</div>
      <div class="quadradinho">cursos</div>
      <div class="quadradinho">empresas</div>
      <div class="quadradinho">pessoal</div>
    </div>

    <div class="parteAbaixo">
      <div class="meio">
        <div style="display: flex; width: 100%; height: 25rem; margin-top: 5rem">
          <img
            class="foto"
            src="../src/components/WhatsApp Image 2024-06-20 at 12.48.21.jpeg"
            alt=""
          />
          <div class="resumo letraParaResumi">
            <h1 style="font-size: 80px">Victor Hugo</h1>
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
          <button
            style="font-weight: 500; background-color: #bada55; font-size: 15px"
            class="umaBola letraParaResumi"
          >
            ensino
          </button>
          <button
            style="font-weight: 500; background-color: #eea302; font-size: 15px"
            class="umaBola letraParaResumi"
          >
            cursos
          </button>
          <button
            style="font-weight: 500; background-color: #80d8da; font-size: 15px"
            class="umaBola letraParaResumi"
          >
            empresas
          </button>
          <button
            style="font-weight: 500; background-color: #c7c7c7; font-size: 15px"
            class="umaBola letraParaResumi"
          >
            pessoal
          </button>
        </div>
      </div>
      <div class="fim letraParaResumi">
        <div>
          <p style="font-weight: 700">GitHub</p>
          <div class="links">
            <a class="oLink" href=" https://github.com/victorsiqueira1">
              https://github.com/victorsiqueira1</a
            >
          </div>
        </div>

        <div>
          <p style="font-weight: 700">Email</p>
          <div class="links">
            <a class="oLink"> victorcubas1972@gmail.com</a>
          </div>
        </div>

        <div>
          <p style="font-weight: 700">Instagram</p>
          <div class="links">
            <p class="oLink">victor.hugo.pcs2003</p>
          </div>
        </div>

        <div style="font-size: 9px; padding-top: 12px">
          <div class="links">
            <p class="oLink">2024 By Victor Hugo Pedroso.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
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
  padding-left: 20px;
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
.meio {
  width: 60%;
  height: 40rem;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-left: 15rem;
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
.quatroBola {
  width: 50%;
  height: 10vh;
  display: flex;
  gap: 10px;
  margin-left: 90px;
}
.umaBola {
  width: 8rem;
  height: 13vh;
  border-radius: 100%;
}
.fim {
  width: 100%;
  height: 10%;
  margin-top: 7rem;
  padding-top: 20px;
  font-size: 13px;
  padding-left: 70px;
  border-top: 1px solid #c7c7c7;
  display: flex;
  gap: 23rem;
}
.links {
  margin-top: 7px;
}
.oLink {
  text-decoration: none;
  color: black;
}
</style>
