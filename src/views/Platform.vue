<template>
  <!-- <el-card class="steps-card"> -->
  <el-steps
    class="custom-steps"
    :active="currentStep"
    align-center
    finish-status="success"
  >
    <el-step v-for="(step, index) in steps"
    :key="index"
    :title="step.title" />
  </el-steps>
  <!-- </el-card> -->
</template>

<script setup>
import { ref } from "vue";

const currentStep = ref(0); // 当前激活的步骤
const steps = [
  // 步骤数据
  {
    title: "选择数据",
    description: "",
  },
  {
    title: "配置邮箱",
    description: "",
  },
  {
    title: "开始",
    description: "",
  },
];
</script>

<style scoped>
.steps-card {
  max-width: 500px; /* 设置最大宽度 */
  margin: auto; /* 居中显示 */
}

.custom-steps :deep(.el-step__title) {
  font-size: 12px; /* 设置标题字体大小为12px */
}
</style>
