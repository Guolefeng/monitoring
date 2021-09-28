<template>
    <div class="page">
      <div class="container">
        <div class="title">项目名称</div>
        <div></div>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="form">
          <el-row>
            <el-col :span="14" :offset="5">
              <el-form-item label-width="0" prop="username">
                <el-input
                  v-model="form.username"
                  placeholder="用户名"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="14" :offset="5">
              <el-form-item label-width="0" prop="password">
                <el-input
                  v-model="form.password"
                  placeholder="密码"
                  show-password
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10" :offset="10">
              <el-button type="primary" round @click="login">登录</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import api from '@/api';
// eslint-disable-next-line import/no-cycle
import router from '@/router';
import store from '@/store';

export default defineComponent({
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }],
      },
    };
  },
  methods: {
    goTask() {
      router.push({ path: '/task' });
    },
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          api.authApi.login(this.form).then((res) => {
            const resData = res.data;
            store.commit('token', resData.token);
            store.commit('user', resData);
            localStorage.setItem('user', JSON.stringify(resData));
            this.goTask();
          }).catch((err) => {
            console.log('err: ', err);
          });
        }
      });
    },
  },
  computed: {
    token: () => store.state.auth.token,
  },
  mounted() {
    if (this.token) {
      this.goTask();
    }
  },
});
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.container {
  width: 480px;
  height: 432px;
  border: 1px solid gray;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 210px;
  font-size: 24px;
  font-weight: bolder;
}
</style>
