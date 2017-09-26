<template>
  <div id="app">
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
    <div class="this_content">
      <div class="left_nav">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>系统设置</template>
            <el-menu-item index="1-1" title="选项1">选项1</el-menu-item>
            <el-menu-item index="1-2" title="选项2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-setting"></i>模板设置</template>
            <el-menu-item index="2-1" title="选项1">选项1</el-menu-item>
            <el-menu-item index="2-2" title="选项2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>其他设置</template>
            <el-menu-item index="3-1" title="选项1">选项1</el-menu-item>
            <el-menu-item index="3-2" title="选项2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 操作区域 -->
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
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

<style>
/*公用*/
/*表格控制换行*/
blockquote,
body,
button,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hr,
input,
legend,
li,
ol,
p,
pre,
span a,
td,
textarea,
th,
ul {
    margin: 0;
    padding: 0;
}
::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 0;
    background-color: #fff;
}
::-webkit-scrollbar{
    width: 8px;
    height: 8px;
}
::-webkit-scrollbar:horizontal{
    width:18px;
    height: 18px;
}
::-webkit-scrollbar-thumb {
    margin: 10px;
    width: 8px;
    height: 18px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 1px solid #fff;
    -webkit-border-radius: 4px;
    background-color: #999;
}
::-webkit-scrollbar-thumb:horizontal{
    border-top: 9px solid #fff;
    border-left: 6px solid #fff;
    border-right: 6px solid #fff;
}
::-webkit-scrollbar-thumb:hover {
    width: 8px;
    height: 50px;
    -webkit-border-radius: 18px;
    border: 1px solid #fff;
    background-color: #9f9f9f;
}
html,body{
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 668px;
  font-size: 14px;
  overflow: hidden;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: center;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/*头部*/
.this_header{
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #009933;
}
.this_header h1{
  display: inline-flex;
  align-items: center;
  height: 80%;
  margin: 0;
  font-size: 22px;
  font-weight: 400;
}
.this_header h1 img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 0.5em;
  margin-right: 0.5em;
}
.header_menu{
  cursor: pointer;
}
.header_menu .el-dropdown-link{
  color: #fff;
  font-size: 14px;
}
.header_user{
  margin-right: 3em;
  cursor: pointer;
}
.header_user .el-dropdown-link{
  color: #fff;
  font-size: 14px;
}
.header_user .el-badge__content{
  right: 0;
}
/*主容器*/
.this_content{
  display: flex;
  flex-grow: 3;
  width: 100%;
  height: 80%;
}
.left_nav{
  height: 100%;
  max-height: 100%;
  background-color: #eef6f3;
  overflow-x: hidden;
  overflow-y: auto;
}
.left_nav .el-menu-vertical-demo{
  width: 200px;
  flex-grow: 1;
}
.left_nav .el-submenu__title,.left_nav .el-menu-item{
  width: 100%;
  text-align: left;
}
/*router 容器*/
.main{
  height: 100%;
  max-width: 100%;
  background-color: #ccc;
  overflow: hidden;
}
</style>
