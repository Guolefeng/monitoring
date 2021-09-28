<template>
  <div class="box">
    <div class="header">
      <el-button
        type="primary"
        round
        size="medium"
        @click="addTask"
      >
        新建任务
      </el-button>
    </div>
    <el-table
      :data="list"
      border
    >
      <el-table-column
        v-for="e in configs"
        :key="e.prop"
        :prop="e.prop"
        :label="e.label"
        :width="e.width"
        :align="e.align"
        row-key="id"
      />
    </el-table>
    <div class="footer">
      <el-pagination
        layout="prev, pager, next"
        @current-change="onPageChange"
        :current-page="pageIndex"
        :page-size="pageSize"
        :total="slist.length"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  inject: [{}],
  data() {
    return {
      configs: [{
        label: '任务ID',
        prop: 'id',
        width: '180',
        align: 'center',
      }, {
        label: '任务状态',
        prop: 'status',
        width: '180',
        align: 'center',
      }, {
        label: '识别文件数量',
        prop: 'count',
        width: '180',
        align: 'center',
      }, {
        label: '完成任务时间',
        prop: 'time',
        align: 'center',
      }],
      slist: [{
        id: 0,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 1,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 2,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 3,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 4,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 5,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 6,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 7,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 8,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 9,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 10,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 11,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 12,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 13,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }, {
        id: 14,
        status: '进行中',
        count: 100,
        time: '',
      }, {
        id: 15,
        status: '已完成',
        count: 1000,
        time: '2021-10-01 10:00:00',
      }],
      list: [],
      pageIndex: 1,
      pageSize: 10,
    };
  },
  mounted() {
    this.list = this.slist.slice(0, this.pageSize);
  },
  methods: {
    addTask() {
      console.log('add task');
    },
    onPageChange(current) {
      this.pageIndex = current;
      const currentPageCount = (current - 1) * this.pageSize;
      this.list = this.slist.slice(currentPageCount, currentPageCount + this.pageSize);
    },
  },
  computed: {},
  watch: {},
});
</script>

<style scoped>
.box {
  padding: 8px;
}
.header {
  margin-bottom: 20px;
}
.footer {
  margin-top: 20px;
  text-align: right;
}
</style>
