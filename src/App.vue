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
            Sicoob Sarom, Apesar de mexer mais em banco de dados e desenvolvimento de sistemas, meu
            sonho sempre foi trabalhar em desenvolvimento de jogos, por isso estou estudando algumas
            linguagem relacionadas a esses ramo. Uma coisa que contribuiu muito para entrar na
            Sarom, foi que foi aberta uma vaga PCD, e eu tenho um nível de autismo leve, tive muita
            dificuldade em me acostumar no trabalho presencial, mais estou cada dia melhor.
          </p>
        </div>
      </div>
      <div class="quatroBola">
        <button
          style="font-weight: 500; background-color: #bada55; font-size: 35px"
          class="umaBola letraParaResumi"
        >
          ensino
        </button>
        <button style="font-weight: 500; font-size: 35px" class="umaBola letraParaResumi">
          cursos
        </button>
        <button style="font-weight: 500; font-size: 35px" class="umaBola letraParaResumi">
          empresas
        </button>
        <button style="font-weight: 500; font-size: 35px" class="umaBola letraParaResumi">
          pessoal
        </button>
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
  height: 125vh;
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

  display: flex;
  align-items: center;
}
.foto {
  width: 40%;
  height: 80%;
  border-radius: 100%;
  margin-left: 10px;
}
.resumo {
  width: 40%;
  height: 50%;
  margin-left: 30px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
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
}
.umaBola {
  width: 13rem;
  height: 20vh;
  border-radius: 100%;
}
</style>
