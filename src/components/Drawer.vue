<template>
  <div :class="['drawer', toggle ? 'active' : '']">
    <div class="header">
      <Icon v-if="iconType" :type="iconType" :needHightlight="false" className="icon" />
      <span class="title">{{title}}</span>
    </div>
    <div class="cont">
      <slot />
    </div>
    <span class="btn" @click="toggleDrawer">
      <svg class="btn-bg" viewBox="0 0 20 50">
        <!-- eslint-disable-next-line max-len -->
        <path d="M 0 0 A 5 5 0 0 0 5 5 L 15 5 A 5 5 0 0 1 20 10 L 20 40 A 5 5 0 0 1 15 45 L 5 45 A 5 5 0 0 0 0 50" fill="rgba(0, 0, 0, 0.4)" />
      </svg>
      <svg class="btn-icon" viewBox="0 0 1024 1024">
        <!-- eslint-disable-next-line max-len -->
        <path d="M832.2 264.6H192.3c-35.2 0-64-28.8-64-64s28.8-64 64-64h639.8c35.2 0 64 28.8 64 64 0.1 35.2-28.7 64-63.9 64z m0 313.3H196.1c-35.2 0-64-28.8-64-64s28.8-64 64-64h636.1c35.2 0 64 28.8 64 64s-28.8 64-64 64z m0 319H192.3c-35.2 0-64-28.8-64-64s28.8-64 64-64h639.8c35.2 0 64 28.8 64 64 0.1 35.2-28.7 64-63.9 64z"></path>
      </svg>
    </span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    title: String,
    iconType: String,
  },
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    toggleDrawer() {
      this.toggle = !this.toggle;
    },
  },
});
</script>

<style scoped>
.drawer {
  position: relative;
  transform: translateX(-104%);
  transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.header {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 45px;
  background-image: url('/assets/img/dialogHeader.png');
  background-position: center;
  background-size: 100% 46px;
  background-repeat: no-repeat;
}
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.title {
  font-size: 14px;
  color: #37C3FD;
}
.cont {
  padding: 10px 20px;
  background: rgba(9, 37, 85, 0.8);
  border: 1px solid rgba(88, 175, 233, 0.6);
  border-top-color: transparent;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 80vh;
  overflow: auto;
}
.btn {
  position: absolute;
  right: -18px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 40px;
  cursor: pointer;
}
.btn-bg {
  width: 100%;
  height: 100%;
  stroke: rgb(88, 175, 233);
}
.btn-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  fill: #94dcf5;
}
.active {
  transform: translateX(0);
}
</style>
