<template>
  <el-steps
    class="custom-steps"
    :active="currentStep"
    align-center
    finish-status="success"
  >
    <el-step
      v-for="(step, index) in steps"
      :key="index"
      :title="$t(`steps.${step.title}`)"
    />
  </el-steps>
</template>


<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const currentStep = ref(0); // 当前激活的步骤

const steps = [
  {
    title: "selectData", // 直接使用字符串键
    description: "",
  },
  {
    title: "configureEmail", // 直接使用字符串键
    description: "",
  },
  {
    title: "start", // 直接使用字符串键
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
