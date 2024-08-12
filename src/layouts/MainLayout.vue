<template>
  <div>
    <Navbar />
    <el-container class="main-layout">
      <el-aside width="200px">
        <!-- 功能栏内容 -->
        <el-menu
          :default-active="activeMenu"
          @select="handleSelect"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="Platform">Platform Data</el-menu-item>
          <el-menu-item index="UploadData">Upload Data</el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";

const activeMenu = ref("Platform"); // 设置默认选中的菜单项
const router = useRouter();

const handleSelect = (key) => {
  activeMenu.value = key;
  router.push({ path: `/analyse/${key}` });
};
</script>

<style scoped>
.main-layout {
  height: calc(100vh - 76px); /* 76px 是导航条的高度，根据实际情况调整 */
}
.el-container {
  overflow: visible;
}
.el-menu-vertical-demo {
  width: 100%;
  height: 100%;
  border-right: none;
}

.el-main {
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
