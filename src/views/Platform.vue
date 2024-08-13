<template>
  <div class="platform-step">
    <div class="platform-step-header">
      <div class="platform-step-title">
        <span>MapMyCells</span>
      </div>
      <div class="platform-step-steps">
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
      </div>
    </div>
    <div class="platform-step-span">
      <span class="platform-step-span-title">Step 1</span>
      <span class="platform-step-span-text"
        >Upload your gene expression data</span
      >
    </div>
  </div>
  <div class="platform-container">
    <div class="platform-left">
      <DataSelect
        v-model="value"
        :options="options"
        tagText="Data set"
        placeholderText="Select"
      />
    </div>
    <div class="platform-right"></div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import DataSelect from "../components/DataSelect.vue";
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

const value = ref("");
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
];
</script>

<style scoped>
.steps-card {
  max-width: 500px; /* 设置最大宽度 */
  margin: auto; /* 居中显示 */
}
.platform-left {
  display: flex;
  padding-left: 10%;
  flex-direction: column;
}
.platform-left :deep(.el-select__wrapper) {
  box-shadow: none;
  background: none;
}

.custom-steps :deep(.el-step__title) {
  font-size: 12px; /* 设置标题字体大小为12px */
}
.platform-step-header {
  display: flex;
}
.platform-step {
  margin-bottom: 40px;
}
.platform-step-steps {
  width: 50%;
}
.platform-step-title {
  width: 20%;
}
.platform-container {
  width: 100%;
}
.platform-container > div {
  width: 50%;
}
.platform-step-title > span {
  display: flex;
  padding-left: 26%;
  font-size: 24px;
}
.platform-step-span {
  display: flex;
  font-size: 18px;
  flex-direction: column;
  padding-left: 8%;
  align-items: flex-start;
}
</style>
