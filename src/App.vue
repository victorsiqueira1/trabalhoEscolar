<template>
  <div class="container">
    <div class="topo">
      <img class="rbolinha" src="./components/icone.png" alt="" />

      <h1 style="color: black; padding-top: 6px">Victor Hugo</h1>
      <h2 class="profissao linha">full-stack programmer</h2>
      <div class="quadradinho">início</div>
      <div class="quadradinho">resumo</div>
      <div class="quadradinho">emprego</div>
      <div class="quadradinho">contato</div>
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
  display: flex;
  justify-content: center;
}
.topo {
  padding-top: 10px;
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
</style>
