<template>
  <div class="rows">
    <div
      v-for="(r, ri) in getRows(config)"
      :key="ri"
      class="row"
      :class="{
        'row-zebra': rowtype === 'zebra',
        'row-line': rowtype === 'line',
      }"
    >
      <span
        v-for="s in r"
        :key="s.id"
        :style="{ width: `${1 / column * 100}%` }"
        class="span"
      >
        <span :style="{ width: labelWidth, ...s.labelStyle }" class="label">{{s.label}}</span>
        <span :style="{ ...s.valueStyle }" class="value">{{data && data[s.id]}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    config: {
      type: Array,
      required: true,
    },
    data: {
      type: Object,
    },
    rowtype: {
      type: String,
      default: 'zebra', // zebra | line
    },
    column: {
      type: Number,
      default: 1,
    },
    labelWidth: {
      type: String,
      default: '80px',
    },
  },
  methods: {
    getRows(config = []) {
      const rows = [];
      let temp = [];
      let count = this.column;

      config.forEach((e, i) => {
        const span = e.span || 1;
        if (span < count) {
          count -= span;
          temp.push(e);
        } else {
          temp.push(e);
          rows.push(temp);
          count = this.column;
          temp = [];
        }

        if (i === config.length - 1 && temp.length > 0) {
          rows.push(temp);
        }
      });
      return rows;
    },
  },
});
</script>

<style scoped>
.rows {
  width: 100%;
  color: #97D0F6;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.row {
  height: 42px;
  line-height: 42px;
}
.row-zebra:nth-child(even) {
  border-radius: 4px;
  background: rgba(24, 55, 110, 0.8);
}
.row-line {
  background: rgba(24, 55, 110, 0.8);
}
.row-line:not(:last-child) {
  border-bottom: 1px dotted rgba(97, 183, 242, 0.5);
}
.row-line:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.row-line:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.span {
  display: inline-block;
}
.label {
  display: inline-block;
  white-space: nowrap;
  text-align: right;
}
.label::after {
  content: '：'
}
.value {
  margin-left: 10px;
}
</style>
