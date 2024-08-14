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
          <el-menu-item index="Platform" class="menu-item">
            <div class="team">
              <img src="../assets/team.svg" />
              <span>{{ $t("platformData") }}</span>
            </div></el-menu-item
          >
          <el-menu-item index="UploadData" class="menu-item">
            <div class="team">
              <img src="../assets/upload.svg" />
              <span>{{ $t("uploadData") }}</span>
            </div></el-menu-item
          >
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
import { useI18n } from "vue-i18n";
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
.el-menu-vertical-demo::after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 1px;
  background-color: #cccccc;
  transform: scaleX(1);
  transition: all 0.3s ease;
  height: 100%;
}
.el-main {
  padding: 20px;
  background-color: #ffffff;
}
.el-menu-vertical-demo :deep(.el-menu-item.is-active) {
  background: #dfdfdf;
}
.menu-item {
  padding-left: 0 !important;
}
.el-menu-vertical-demo :deep(.el-menu-item.is-active)::after {
  content: "";
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 2px;
  background-color: #334c67;
  transform: scaleX(1);
  transition: all 0.3s ease;
  height: 100%;
}
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
}
.team span {
  height: 26px;
  line-height: 24px;
}
.team img {
  width: 24px;
  height: 24px;
}
</style>
