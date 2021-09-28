<template>
  <div class="box" id="chart" />
</template>

<script>
import { defineComponent } from 'vue';
// eslint-disable-next-line import/no-unresolved
import echarts from 'echarts';

export default defineComponent({
  props: {
    cid: {
      type: String,
      required: true,
    },
    title: String,
    datas: {
      type: Array, // [{value: xx, name: 'xxx' }, ...]
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.curEle = this.$refs[this.cid];
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(document.getElementById('chart'));
      const option = {
        title: {
          text: this.title,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
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
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
});
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
}
</style>
