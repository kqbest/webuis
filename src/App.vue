<template>
  <section id="app">
    <!-- 头部 -->
    <header class="this_header">
      <h1><img src="../src/assets/img/djlogo.png"/>超声信息系统</h1>
      <div class="header_menu">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            系统工作站<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>系统工作站</el-dropdown-item>
            <el-dropdown-item>登记工作站</el-dropdown-item>
            <el-dropdown-item>诊断工作站</el-dropdown-item>
            <el-dropdown-item>统计工作站</el-dropdown-item>
            <el-dropdown-item>机房工作站</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="header_user">
          <el-badge :value="120" :max="99" class="item">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                ckq<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>账号信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>  
            </el-dropdown>
          </el-badge>
      </div>
    </header>
    <!-- 主容器 -->
    <section class="this_content">
      <div class="left_nav">
        <el-button type="text" class="el-icon-menu this_spread" @click="isCollapse=!isCollapse"></el-button>
        <el-menu default-active="1-2" :router="true" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">系统设置</span>
            </template>
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">插件管理</span>
            </el-menu-item>
            <el-menu-item index="/pluginManagement">
              <i class="el-icon-menu"></i>
              <span slot="title">地区管理</span>
            </el-menu-item>
            <el-menu-item index="/regionalManagement">
              <i class="el-icon-menu"></i>
              <span slot="title">院区管理</span>
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class="el-icon-menu"></i>
              <span slot="title">科室管理</span>
            </el-menu-item>
            <el-menu-item index="1-5">
              <i class="el-icon-menu"></i>
              <span slot="title">角色管理</span>
            </el-menu-item>
            <el-menu-item index="1-6">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="1-7">
              <i class="el-icon-menu"></i>
              <span slot="title">系统字典</span>
            </el-menu-item>
            <el-menu-item index="1-8">
              <i class="el-icon-menu"></i>
              <span slot="title">科室字典</span>
            </el-menu-item>
            <el-menu-item index="1-9">
              <i class="el-icon-menu"></i>
              <span slot="title">系统参数</span>
            </el-menu-item>
            <el-menu-item index="1-10">
              <i class="el-icon-menu"></i>
              <span slot="title">科室参数</span>
            </el-menu-item>
            <el-menu-item index="1-11">
              <i class="el-icon-menu"></i>
              <span slot="title">日志管理</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">模板设置</span>
            </template>
            <el-menu-item index="2-1">
              <i class="el-icon-menu"></i>
              <span slot="title">常用符号</span>
            </el-menu-item>
            <el-menu-item index="2-2">
              <i class="el-icon-menu"></i>
              <span slot="title">关键短语</span>
            </el-menu-item>
            <el-menu-item index="2-3">
              <i class="el-icon-menu"></i>
              <span slot="title">模板分类</span>
            </el-menu-item>
            <el-menu-item index="2-4">
              <i class="el-icon-menu"></i>
              <span slot="title">书写模板</span>
            </el-menu-item>
            <el-menu-item index="2-5">
              <i class="el-icon-menu"></i>
              <span slot="title">书写词库</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span slot="title">其他设置</span>
            </template>
            <el-menu-item index="3-1">
              <i class="el-icon-menu"></i>
              <span slot="title">检查部位</span>
            </el-menu-item>
            <el-menu-item index="3-2">
              <i class="el-icon-menu"></i>
              <span slot="title">报告项设置</span>
            </el-menu-item>
            <el-menu-item index="3-3">
              <i class="el-icon-menu"></i>
              <span slot="title">自定义项</span>
            </el-menu-item>
            <el-menu-item index="3-4">
              <i class="el-icon-menu"></i>
              <span slot="title">样图管理</span>
            </el-menu-item>
            <el-menu-item index="3-5">
              <i class="el-icon-menu"></i>
              <span slot="title">内镜信息</span>
            </el-menu-item>
            <el-menu-item index="3-6">
              <i class="el-icon-menu"></i>
              <span slot="title">清洗消毒</span>
            </el-menu-item>
            <el-menu-item index="3-7">
              <i class="el-icon-menu"></i>
              <span slot="title">测值管理</span>
            </el-menu-item>
            <el-menu-item index="3-8">
              <i class="el-icon-menu"></i>
              <span slot="title">模板绑定</span>
            </el-menu-item>
            <el-menu-item index="3-9">
              <i class="el-icon-menu"></i>
              <span slot="title">绑定标识</span>
            </el-menu-item>
            <el-menu-item index="3-10">
              <i class="el-icon-menu"></i>
              <span slot="title">结构化报告</span>
            </el-menu-item>
            <el-menu-item index="3-11">
              <i class="el-icon-menu"></i>
              <span slot="title">预约设置</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 操作区域 -->
      <div class="main">
        <router-view class="view"></router-view>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*头部*/
  .this_header{
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 100%;
    height: 60px;
    color: #fff;
    background-color: #009933;
    h1{
      display: inline-flex;
      align-items: center;
      height: 80%;
      margin: 0;
      font-size: 22px;
      font-weight: 400;
      img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-left: 0.5em;
        margin-right: 0.5em;
      }
    }
    .header_menu{
      cursor: pointer;
      .el-dropdown-link{
        color: #fff;
        font-size: 14px;
      }
    }
    .header_user{
      margin-right: 3em;
      cursor: pointer;
      .el-dropdown-link{
        color: #fff;
        font-size: 14px;
      }
      .el-badge__content.is-fixed{
        right: 0 !important;
      }
    }
  }
  /*主容器*/
  .this_content{
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 80%;
    .left_nav{
      height: 100%;
      max-height: 100%;
      background-color: #eef6f3;
      .this_spread {
        width: 100%;
        background: #eef1f6;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
      }
      .el-submenu__title,.el-menu-item{
        width: 100%;
        text-align: left;
      }
    }
    /*router 容器*/
    .main{
      flex-grow: 1;
      height: 100%;
      max-width: 100%;
      padding: 15px 20px 0 20px;
      border: 1px solid green;
      overflow: hidden;
      .view{
        width: 100%;
        height: 100%;
        border: 1px solid red;
      }
    }
  }
}
</style>
