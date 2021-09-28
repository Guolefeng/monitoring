<template>
  <div class="container">
    <el-container>
      <el-header style="border: 1px solid #e6e6e6;">
        <div class="header">CON不良信息监测系统</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="0"
            @select="onMenuSelect"
          >
            <el-menu-item v-for="(m, i) in menu" :key="i" :index="i">
              <i :class="m.icon" />
              <span>{{m.label}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import menu from '@/config/menu';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

export default defineComponent({
  components: {
  },
  data() {
    return {
      menu,
    };
  },
  methods: {
    onMenuSelect(index) {
      router.push({ path: menu[index].path });
    },
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--el-text-color-primary);
}
.el-container,
.el-menu {
  height: 100%;
}
</style>
