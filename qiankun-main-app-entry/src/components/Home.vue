<template>
  <div class="container">
    <header>微前端实践</header>
    <section class="main">
      <nav class="main__nav main__common">
        <div class="main__menu">
          <div
            class="main__menu__item"
            :class="res.currentId == item.id ? 'main__menu__actived' : ''"
            v-for="item in res.menuLists"
            :key="item.id"
            @click="selectMenu(item)"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
      </nav>
      <div class="main__content main__common">
        <!-- 主应用区域 -->
        <div v-if="res.currentId === 1">主应用区域</div>
        <!-- 子应用挂载区域 -->
        <div id="micro-container-app"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent, reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  setup() {
    const res = reactive({
      menuLists: [
        { id: 1, name: "主应用页面", url: "/home" },
        { id: 2, name: "Vue 页面", url: "/web" },
        { id: 3, name: "React 页面", url: "/mobile" },
      ],
      currentId: 1,
    });
    const route = useRoute();
    const router = useRouter();
    console.log(route);

    const selectMenu = (val) => {
      res.currentId = val.id;
      router.push({ path: val.url });
    };

    watch(
      () => res.currentId,
      (newValue, oldValue) => {
        console.log(newValue, oldValue, "9000");

        if (newValue === 1) {
          router.push({ path: "/home" });
        }
      },
      { deep: true, immediate: true }
    );
    return { res, selectMenu };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding: 0;
  background-image: url("../assets/bkg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  font-weight: bold;
}
header {
  width: 100vw;
  height: 80px;
  margin: 0;
  padding: 0;
  line-height: 80px;
  text-align: center;
  color: #000000;
  font-size: 20px;
}
.main {
  display: grid;
  grid-template-columns: 10% 90%;
  height: calc(100vh - 80px);

  &__common {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__menu {
    &__item {
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
    &__actived {
      color: rgb(45, 213, 110);
    }
  }
}
</style>
