<template>
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
      <!-- 子应用挂载区域 -->
      <div id="micro-container-app"></div>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive } from "vue";
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

    return { res, selectMenu };
  },
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
  line-height: 80px;
  text-align: center;
  background: beige;
}
.main {
  display: grid;
  grid-template-columns: 10% 90%;
  height: calc(100vh - 80px);
  &__nav {
    background: #f0f7ff;
  }
  &__content {
    background: #e6f5df;
  }
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
      color: #409eff;
    }
  }
}
</style>
