<template>
  <img
    :src="curImg"
    :class="'icon ' + className"
    @click="onClick"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    needHightlight: {
      type: Boolean,
      default: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      curImg: this.active ? `/assets/icon/${this.type}hl.png` : `/assets/icon/${this.type}.png`,
      iconImg: `/assets/icon/${this.type}.png`,
      iconImgHightlight: this.needHightlight ? `/assets/icon/${this.type}hl.png` : '',
    };
  },
  methods: {
    mouseEnter() {
      if (this.needHightlight) {
        this.curImg = this.iconImgHightlight;
      }
    },
    mouseLeave() {
      if (this.needHightlight && !this.active) {
        this.curImg = this.iconImg;
      }
    },
  },
  watch: {
    active(newVal) {
      if (newVal) {
        this.curImg = this.iconImgHightlight;
      } else {
        this.curImg = this.iconImg;
      }
    },
  },
});
</script>

<style scoped>
.icon {
  display: inline-block;
  width: 48px;
  height: 48px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
