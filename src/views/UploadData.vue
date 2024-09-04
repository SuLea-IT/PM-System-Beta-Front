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
        <DataUpload
          v-model="selectedValues[3]"
          :selected-file-type="Number(selectedValues[2])"
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
        <!-- First DataSelect component -->
        <DataSelect
          v-model="selectedValues[2]"
          :options="options"
          tagText="Data set"
          placeholderText="Select"
        />
        <!-- New DataSelect component -->
        <DataSelect
          v-model="selectedValues[4]"
          :options="funOptions"
          tagText="Functionality"
          placeholderText="Select"
        />
        <DataInput
          v-model="Inputvalue"
          tagText="Enter your email address"
          placeholderText="Select"
          :validateFn="validateEmail"
        />
        <el-button @click="handleUpload">Upload</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import DataSelect from "../components/element/DataSelect.vue";
import DataInput from "../components/element/DataInput.vue";
import { validateEmail } from "../rule/emailValidator.js";
import DataUpload from "../components/element/DataUpload.vue";
import { uploadFiles } from "../utils/uploadUtil.js";
import { ElMessage } from "element-plus";

const currentStep = ref(1); // 当前步骤
const steps = [
  { title: "selectData", description: "" },
  { title: "uploadData", description: "" },
  { title: "configureEmail", description: "" },
];

const selectedValues = ref(["", "", "1", "", "1"]);
const Inputvalue = ref("");
let selectedFileType = ref(Number(selectedValues.value[2]));
let selectedFun = ref(Number(selectedValues.value[4]));
const options = [
  { value: "1", label: "单细胞数据聚类" },
  { value: "2", label: "单细胞级别空间聚类" },
  { value: "3", label: "百迈客空间转录组聚类" },
  { value: "4", label: "Xenium数据聚类" },
  { value: "5", label: "H5ad数据聚类" },
];

const funOptions = [
  { value: "1", label: "Function 1" },
  { value: "2", label: "Function 2" },
  { value: "3", label: "Function 3" },
];

const fileTypeRestrictions = {
  1: {
    allowedExtensions: [".tsv.gz", ".mtx.gz"],
    requiredFileNames: ["barcodes", "features", "matrix"],
    uploadFileCount: 3,
  },
  2: {
    allowedExtensions: [".tsv.gz", ".mtx.gz"],
    requiredFileNames: ["barcodes", "features", "matrix", "barcodes_pos"],
    uploadFileCount: 4,
  },
  3: {
    allowedExtensions: [".tsv.gz", ".mtx.gz"],
    requiredFileNames: ["barcodes", "features", "matrix", "*"],
    uploadFileCount: 4,
  },
  4: {
    allowedExtensions: [".csv.gz", ".mtx.gz", ".h5"],
    requiredFileNames: ["*", "*"],
    uploadFileCount: 2,
  },
  5: {
    allowedExtensions: [".h5ad"],
    requiredFileNames: ["*", "*"],
    uploadFileCount: 1,
  },
};

const fileType = ref(1);
const fileNumber = ref(3);

watch(
  () => selectedValues.value[2],
  (newValue) => {
    if (newValue) {
      const restriction = fileTypeRestrictions[Number(newValue)];
      if (restriction) {
        fileType.value = Number(newValue);
        fileNumber.value = restriction.uploadFileCount;
        currentStep.value = 1; // 选择了 DataSet 之后，进入步骤2：上传文件
      }
    } else {
      fileType.value = 1;
      fileNumber.value = fileTypeRestrictions[1].uploadFileCount;
      currentStep.value = 0; // 回到第一步
    }
  }
);

// Watch for file upload status
const isFileUploaded = ref(false);

watch(Inputvalue, (newValue) => {
  if (validateEmail(newValue) && isFileUploaded.value) {
    currentStep.value = 2; // Correct email and file uploaded, move to step 3
  }
});

const handleUpload = () => {
  const email = Inputvalue.value;
  const fileInput = document.querySelector('.upload-demo input[type="file"]');
  const files = fileInput?.files;

  if (files && files.length > 0) {
    if (files.length != fileNumber.value) {
      ElMessage.error(`请上传至少 ${fileNumber.value} 个文件。`);
      return;
    }

    const areAllFilesValid = Array.from(files).every((file) =>
      validateFile(file, fileType.value)
    );

    if (!areAllFilesValid) {
      ElMessage.error("有文件类型或名称不符合要求！");
      return;
    }

    isFileUploaded.value = true; // Mark files as uploaded

    // Correctly use validateEmail function
    if (validateEmail(email)) {
      uploadFiles(
        files,
        email,
        fileType.value,
        fileNumber.value,
        selectedFun.value
      );
    } else {
      ElMessage.error("邮箱没有填写！");
    }
  } else {
    ElMessage.error("没有文件上传！");
  }
};

// Function to validate file type and name
const validateFile = (file, fileType) => {
  const restrictions = fileTypeRestrictions[fileType];
  const fileName = file.name.toLowerCase();
  const fileExtension = `.${fileName.substring(fileName.indexOf(".") + 1)}`;

  const isValidType = restrictions.allowedExtensions.includes(fileExtension);
  const matchesRequiredName = restrictions.requiredFileNames.some(
    (name) => name === "*" || fileName.includes(name)
  );

  return isValidType && matchesRequiredName;
};
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
