import axiosInstance from './axiosInstance';
import { ElMessage } from "element-plus";  // Import ElMessage

const uploadFileInChunks = async (file, currentFileIndex, totalFiles, email, fileType, fileNumber, fun) => {
    const chunkSize = 5 * 1024 * 1024; // Size of each chunk: 5MB
    const totalChunks = Math.ceil(file.size / chunkSize);
    let scz = 0;

    const uploadChunk = async (index) => {
        if (index >= totalChunks) {
            return;
        }

        const start = index * chunkSize;
        const end = Math.min(file.size, start + chunkSize);
        const chunk = file.slice(start, end);

        const formData = new FormData();
        formData.append('file', chunk);
        formData.append('index', index);
        formData.append('totalChunks', totalChunks);
        formData.append('fileName', file.name);
        formData.append('fileSize', file.size);
        formData.append('type', fileType);
        formData.append('number', fileNumber);
        formData.append('currentFileIndex', currentFileIndex);
        formData.append('totalFiles', totalFiles);
        formData.append('email', email);
        formData.append('fun', fun); // Add the new fun field

        try {
            const response = await axiosInstance.post('/upload/upload', formData);

            // Check response status and message
            if (response.code === 200) {
                if (response.msg === "上传中") {
                    uploadChunk(index + 1); // Recursively upload the next chunk
                    scz++;
                    if (scz % 3 === 0) {
                        ElMessage.success(response.msg);
                    }
                }
                else if (response.msg === "所有文件上传成功") {
                    ElMessage.success("文件上传成功");
                }
            } else {
                ElMessage.error(response.msg); // Display error message
            }
        } catch (error) {
            console.error('Error uploading chunk:', error);
            ElMessage.error('上传出错，请重试！');
        }
    };

    await uploadChunk(0); // Start uploading the first chunk
};

const uploadFiles = (files, email, fileType, fileNumber, fun) => {
    if (files.length === 0) {
        ElMessage.error("没有文件上传！");
        return;
    }

    const totalFiles = files.length;

    const uploadNextFile = (index) => {
        if (index >= totalFiles) return;

        uploadFileInChunks(files[index], index + 1, totalFiles, email, fileType, fileNumber, fun).then(() => {
            setTimeout(() => {
                uploadNextFile(index + 1); // Wait 300ms before uploading the next file
            }, 300);
        });
    };

    uploadNextFile(0); // Start uploading the first file
};

export { uploadFiles };
