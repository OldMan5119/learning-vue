<template>
  <div>
    <img src="@/assets/logo.png">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"/>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                  index="1-1"
                  route="/dashbord"
              >
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                选项2
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
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

<style scoped>
/* 移除 el-col 的默认 padding */
.tac .el-col {
  padding: 0 !important;
}

/* 移除 el-menu 的边框和内边距 */
.tac .el-menu-vertical-demo {
  width: 100%;
  border-right: none !important;
  padding: 0 !important;
}

</style>