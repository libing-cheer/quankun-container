<template>
  <router-view>
    <keep-alive>
      <Home />
    </keep-alive>
  </router-view>
</template>
<script>
import { defineComponent } from "vue";
import Home from "./components/Home.vue";
export default defineComponent({
  name: "App",
  components: {
    Home,
  },
  setup() {},
});
</script>

<style lang="scss"></style>
