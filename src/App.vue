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
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
            <el-menu-item index="1-1" title="选项1"><i class="el-icon-menu"></i>选项1</el-menu-item>
            <el-menu-item index="1-2" title="选项2"><i class="el-icon-menu"></i></i>选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>模板设置</template>
            <el-menu-item index="2-1" title="选项1"><i class="el-icon-menu"></i>选项1</el-menu-item>
            <el-menu-item index="2-2" title="选项2"><i class="el-icon-menu"></i>选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>其他设置</template>
            <el-menu-item index="3-1" title="选项1"><i class="el-icon-menu"></i>选项1</el-menu-item>
            <el-menu-item index="3-2" title="选项2"><i class="el-icon-menu"></i>选项2</el-menu-item>
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
      overflow-x: hidden;
      overflow-y: auto;
      .el-menu-vertical-demo{
        width: 200px;
        flex-grow: 1;
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
