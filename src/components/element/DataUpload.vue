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
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";
import { defineEmits } from "vue";
import { ElMessage } from "element-plus";
import {
  validateFileType,
  allowedFileTypes,
} from "../../rule/fileTypeValidator.js";

const emit = defineEmits(["update:modelValue"]);

const acceptFileTypes = allowedFileTypes.join(",");

const beforeUpload = (file) => {
  const isValid = validateFileType(file);
  if (!isValid) {
    ElMessage.error(
      `File type ${file.type} is not allowed. Only jpg/png files are allowed.`
    );
  }
  return isValid;
};

const handleChange = (file, fileList) => {
  emit("update:modelValue", fileList);
};
</script>
<style scoped>
.upload-demo {
  width: 60%;
  margin: 40px 0;
}
</style>
