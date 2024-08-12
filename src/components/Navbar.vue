<template>
  <nav class="navbar">
    <div class="navbar-left">
      <span class="navbar-title">{{ $t("title") }}</span>
    </div>
    <div class="navbar-center">
      <ul class="navbar-menu">
        <li>
          <router-link to="/about">{{ $t("about") }}</router-link>
        </li>
        <li>
          <router-link to="/analyse">{{ $t("analyse") }}</router-link>
        </li>
        <li>
          <router-link to="/forum">{{ $t("forum") }}</router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-right">
      <el-popover
        v-model:visible="popoverVisible"
        placement="bottom"
        width="60"
        trigger="click"
      >
        <template #reference>
          <div class="language-selector">
            <img src="../assets/language.svg" class="language-icon" />
          </div>
        </template>
        <div class="language-options">
          <div
            v-for="lang in languages"
            :key="lang.value"
            :class="{ 'active-language': localeLabel == lang.label }"
            @click="changeLanguage(lang.value)"
          >
            {{ lang.label }}
          </div>
        </div>
      </el-popover>
      <button class="navbar-button">{{ $t("light") }}</button>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref, watchEffect } from "vue";

// 获取当前语言和切换语言的方法
const { locale } = useI18n();

// 定义语言选项
const languages = [
  { label: "English", value: "en" },
  { label: "中文", value: "zh" },
];

// 获取当前语言的显示文本
const localeLabel = ref(
  languages.find((lang) => lang.value === locale.value)?.label
);

// 控制弹出框的显示状态
const popoverVisible = ref(false);

// 监听 locale 的变化，以便在渲染时正确显示当前语言
watchEffect(() => {
  localeLabel.value = languages.find(
    (lang) => lang.value === locale.value
  )?.label;
});

// 切换语言的方法
const changeLanguage = (newLocale) => {
  locale.value = newLocale;
  console.log(locale.value);
  popoverVisible.value = false; // 选择完语言后关闭弹出框
};
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-left {
  flex: 1;
}

.navbar-title {
  font-weight: bold;
  font-size: 16px;
}

.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu li a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px 0;
  position: relative;
}

.navbar-menu li a.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgb(108, 108, 235);
  transform: scaleX(1);
  transition: all 0.3s ease;
  width: 100%;
}

.navbar-right {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.language-selector {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.language-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.language-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.language-options div {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
}

.language-options div:hover {
  background-color: #f0f0f0;
}

.active-language {
  font-weight: bold;
  color: #545454;
  background-color: #b6e8ff; /* 突出显示当前语言 */
  border-radius: 4px;
}
</style>
