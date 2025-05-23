<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <h4>我是侧边栏</h4>
    </div>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.sidebar-container {
  display: flex;
  width: 200px;
  background-color: #bfcbee;
}

.main-container {
  background-color: #bfcbd9;
  display: flex;
  flex: 1;
}
</style>