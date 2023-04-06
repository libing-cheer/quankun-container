<template>
  <div class="home">
    <img class="App-logo" :src="Logo" alt="Logo" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Logo from "../assets/logo.png";
export default defineComponent({
  setup() {
    return {
      Logo,
    };
  },
});
</script>
<style lang="scss" scoped>

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 1s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
