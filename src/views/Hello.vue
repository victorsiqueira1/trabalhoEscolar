<template>
  <div class="meio">
    <transition name="toast">
      <div class="container" v-show="showtoast">
        <h4 style="padding-top: 25px">JORNADA DE ENSINO</h4>
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
  display: flex;
  flex-direction: row;
  align-items: normal;
  gap: 300px;
  font-family: 'Work Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  padding-left: 70px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e2e2;
  justify-content: center;
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
