<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/layout/Sidebar";

export default {
  name: "index",
  components: {Sidebar}
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