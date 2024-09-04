<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :accept="allowedExtensions"
    :before-upload="beforeUpload"
    :on-change="handleChange"
    :auto-upload="false"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text" v-html="$t('dropFileText')"></div>
    <template #tip>
      <div class="el-upload__tip">
        {{ $t("fileSizeTip") }}
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import i18n from "../../i18n/i18n";
import { ref, watch } from "vue";
import { fileTypeRestrictions } from "../../rule/fileRestrictions.js";

const props = defineProps({
  selectedFileType: Number, // 接收父组件传递的selectedFileType
});

const emit = defineEmits(["update:modelValue"]);

const allowedExtensions = ref(
  fileTypeRestrictions[props.selectedFileType]?.allowedExtensions.join(",") ||
    ""
);

watch(
  () => props.selectedFileType,
  (newValue) => {
    allowedExtensions.value =
      fileTypeRestrictions[newValue]?.allowedExtensions.join(",") || "";
  }
);

const beforeUpload = (file) => {
  const isValid = validateFile(file, props.selectedFileType);
  if (!isValid) {
    ElMessage.error(i18n.global.t("fileUploadError", { type: file.name }));
  }
  return isValid;
};

const handleChange = (file, fileList) => {
  const isValid = validateFile(file, props.selectedFileType);
  if (isValid) {
    emit("update:modelValue", fileList);
  }
};

// 验证文件类型和数量
const validateFile = (file, fileType) => {
  const restrictions = fileTypeRestrictions[fileType];
  const fileName = file.name.toLowerCase();
  const fileExtension = `.${fileName.split(".").pop()}`;

  const isValidType = restrictions.allowedExtensions.includes(fileExtension);
  const matchesRequiredName = restrictions.requiredFileNames.some(
    (name) => name === "*" || fileName.includes(name)
  );

  if (!isValidType || !matchesRequiredName) {
    console.error(
      i18n.global.t("fileUploadConsoleError", {
        type: fileName,
        allowedTypes: restrictions.allowedExtensions.join(", "),
        requiredNames: restrictions.requiredFileNames.join(", "),
      })
    );
    return false;
  }
  return true;
};
</script>

<style scoped>
.upload-demo {
  width: 60%;
  margin: 40px 0;
}
</style>
