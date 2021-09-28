<template>
  <div class="empty">
    <img src="/assets/img/empty.png" alt="" class="img">
    <div class="desc">{{text}}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<style scoped>
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img {
  width: 209px;
  height: 193px;
}
.desc {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #F2F8FB;
}
</style>
