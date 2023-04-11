<template>
  <div class="vue__home">
    <CarModel />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CarModel from "../components/CarModel.vue";

export default defineComponent({
  components: { CarModel },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
