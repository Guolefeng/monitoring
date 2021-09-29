<template>
  <div class="box">
    <div class="top">
      <Pie
        cid="weekImg"
        title="图片不良信息"
        :subTitle="'今日统计识别图片总量' + getTotal(imgData)"
        :datas="imgData"
      />
    </div>
    <div class="bottom">
      <div class="bottom-l">
        <Pie
          cid="weekVideo"
          title="视频不良信息"
          :subTitle="'今日统计识别视频总量' + getTotal(videoData)"
          :datas="videoData"
        />
      </div>
      <div class="bottom-r">
        <Pie
          cid="weekText"
          title="文本不良信息"
          :subTitle="'今日统计识别文本总量' + getTotal(textData)"
          :datas="textData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Pie from '@/components/Pie.vue';

export default defineComponent({
  components: {
    Pie,
  },
  inject: [],
  data() {
    return {
      imgData: [{ value: 500, name: '不良图片数量' }, { value: 500, name: '合格图片数量' }],
      videoData: [{ value: 500, name: '不良视频数量' }, { value: 200, name: '合格视频数量' }],
      textData: [{ value: 400, name: '不良文本数量' }, { value: 800, name: '合格文本数量' }],
    };
  },
  mounted() {
  },
  methods: {
    getTotal(arr) {
      return arr.reduce((pre, cur) => (pre + cur.value), 0);
    },
  },
  computed: {},
  watch: {},
});
</script>

<style scoped>
.box {
  width: 100%;
  height: calc(100% - 40px);
}
.top {
  margin-bottom: 20px;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #e6e6e6;
}
.bottom {
  display: flex;
  width: 100%;
  height: 50%
}
.bottom-l,
.bottom-r {
  flex: 1;
  height: 100%;
}
.bottom-l {
  border-right: 1px solid #e6e6e6;
}
</style>
