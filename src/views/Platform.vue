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
  </div>
  <div class="platform-container">
    <div class="platform-left">
      <div class="platform-step-span">
        <span class="platform-step-span-title">Step 1</span>
        <span class="platform-step-span-text"
          >Upload your gene expression data</span
        >
      </div>
      <div class="platform-left-select">
        <DataSelect
          v-model="value"
          :options="options"
          tagText="Data set"
          placeholderText="Select"
        />
        <DataSelect
          v-model="value"
          :options="options"
          tagText="Data set"
          placeholderText="Select"
        />
      </div>
      <div class="platform-left-tip">
        <span>Data Usage & Privacy</span>
        <span
          >Allen Institute does not use, retain, or aggregate any data uploaded
          to MapMyCells for its own internal purposes, nor will we publish your
          data publicly. Allen Institute database administrators can access any
          uploaded dataset for debugging and other error remediation purposes.
          All files will be deleted one week after upload. Please do not submit
          any sensitive data, personally identifiable data, or protected health
          data that could put an individual's privacy at risk into MapMyCells.
          See the Allen Institute Privacy Policy for more information on our
          privacy practices.</span
        >
      </div>
    </div>
    <div class="platform-right">
      <div class="platform-step-span">
        <span class="platform-step-span-title">Step 1</span>
        <span class="platform-step-span-text"
          >Upload your gene expression data</span
        >
      </div>
      <div class="platform-left-select">
        <div class="platform-right-image">
          <img src="/UMAP.png" alt="" />
        </div>
        <DataSelect
          v-model="value"
          :options="options"
          tagText="Data set"
          placeholderText="Select"
        />
        <DataInput
          v-model="Inputvalue"
          tagText="Enter your email address"
          placeholderText="Select"
          :validateFn="validateEmail"
        />
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import DataSelect from "../components/DataSelect.vue";
import DataInput from "../components/DataInput.vue";
import { validateEmail } from "../rule/emailValidator";
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
const Inputvalue = ref("");
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
  height: 100%;
  justify-content: space-between;
}
.platform-left::after {
  content: "";
  position: absolute;
  bottom: 10%;
  left: 50%;
  /* right: 0; */
  height: 60%;
  background-color: #cccccc;
  transform: scaleX(1);
  transition: all 0.3s ease;
  width: 1px;
}
.platform-left :deep(.el-select__wrapper) {
  box-shadow: none;
  background: none;
}
.platform-right :deep(.el-select__wrapper) {
  box-shadow: none;
  background: none;
}

.platform-right :deep(.el-input__wrapper) {
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
  height: 70%;
  display: flex;
}
.platform-container > div {
  width: 40%;
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
  margin-left: -4%;
  align-items: flex-start;
  width: 60%;
  text-align: left;
}
.platform-left-tip {
  height: 200px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  text-align: left;
  font-size: 12px;
  width: 360px;
  margin-left: -4%;
}

.platform-right {
  width: 50%;
}
.platform-right-image {
  width: 240px;
  height: 240px;
}
</style>
