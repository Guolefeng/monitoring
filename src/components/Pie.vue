<template>
  <div class="pie" :id="cid" />
</template>

<script>
import { defineComponent } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  props: {
    cid: {
      type: String,
      required: true,
    },
    title: String,
    subTitle: String,
    datas: {
      type: Array, // [{value: xx, name: 'xxx' }, ...]
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.renderChart();
    window.addEventListener('resize', this.onResize);
  },
  methods: {
    getRandomArrayElements(arr, count) {
      const shuffled = arr.slice(0);
      let i = arr.length;
      const min = i - count;
      let temp;
      let index;
      // eslint-disable-next-line no-plusplus
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    },
    renderChart() {
      this.chart = echarts.init(document.getElementById(this.cid));
      const option = {
        color: this.getRandomArrayElements(['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'], 2),
        title: {
          text: this.title,
          subtext: this.subTitle,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          right: '20',
          bottom: 'auto',
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: '50%',
            data: this.datas,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };
      this.chart.setOption(option);
    },
    onResize() {
      if (this.chart) {
        this.chart.resize();
      }
    },
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
    window.removeEventListener('resize', this.onResize);
  },
});
</script>

<style scoped>
.pie {
  width: 100%;
  height: 100%;
}
</style>
