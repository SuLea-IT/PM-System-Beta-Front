<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :accept="acceptFileTypes"
    :before-upload="beforeUpload"
    :on-change="handleChange"
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
import {
  validateFileType,
  allowedFileTypes,
} from "../../rule/fileTypeValidator.js";

const emit = defineEmits(["update:modelValue"]);

const acceptFileTypes = allowedFileTypes.join(",");

const beforeUpload = (file) => {
  const isValid = validateFileType(file);
  console.log(isValid);

  if (!isValid) {
    ElMessage.error(i18n.global.t("fileUploadError", { type: file.type }));
  }
  return isValid;
};

const handleChange = (file, fileList) => {
  const isValid = validateFileType(file);
  console.log(isValid);
  emit("update:modelValue", fileList);
};
</script>
<style scoped>
.upload-demo {
  width: 60%;
  margin: 40px 0;
}
</style>
