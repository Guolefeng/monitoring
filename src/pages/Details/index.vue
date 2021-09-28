<template>
  <div class="box">
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
        prop: 'task_id',
        width: '100',
        align: 'center',
      }, {
        label: '文件ID',
        prop: 'file_id',
        width: '100',
        align: 'center',
      }, {
        label: '文件类型',
        prop: 'file_type',
        width: '100',
        align: 'center',
      }, {
        label: '文件URI',
        prop: 'time',
      }, {
        label: '所在存储路径',
        prop: 'file_path',
      }, {
        label: '文件打分',
        prop: 'file_score',
        align: 'center',
      }, {
        label: '下载时间',
        prop: 'download_time',
        align: 'center',
      }],
      slist: [{
        task_id: 0,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 1,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 2,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 3,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 4,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 5,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 6,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 7,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 8,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 9,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 10,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 11,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 12,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 13,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
      }, {
        task_id: 14,
        file_type: '进行中',
        file_score: 100,
        download_time: '',
      }, {
        task_id: 15,
        file_type: '已完成',
        file_score: 1000,
        download_time: '2021-10-01 10:00:00',
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
