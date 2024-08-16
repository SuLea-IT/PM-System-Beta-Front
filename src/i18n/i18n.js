import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        title: 'Spatial transcriptome database -- Li Bosheng Lab',
        about: 'About',
        analyse: 'Analyse',
        forum: 'Forum',
        english: 'English',
        light: 'Light',
        platformData: "Platform Data",
        uploadData: "upload Data",
        steps: {
            selectData: 'Select Data',
            configureEmail: 'Configure Email',
            start: 'Start',
        },
        fileUploadError: 'File type {type} is not allowed. Only jpg/png files are allowed.',
        fileUploadConsoleError: 'File type {type} is not allowed. Only {allowedTypes} are allowed.',
        dropFileText: 'Drop file here or <em>click to upload</em>',
        fileSizeTip: 'jpg/png files with a size less than 500kb',
    },
    zh: {
        title: '空间转录组数据库 -- 李博生实验室',
        about: '关于',
        analyse: '分析',
        forum: '论坛',
        english: '英语',
        light: '浅色',
        platformData: "平台数据",
        uploadData: "上传数据",
        steps: {
            selectData: '选择数据',
            configureEmail: '配置邮箱',
            start: '开始',
        },
        fileUploadError: '文件类型 {type} 不被允许。只允许上传 jpg/png 文件。',
        fileUploadConsoleError: '文件类型 {type} 不被允许。只允许上传 {allowedTypes} 文件。',
        dropFileText: '将文件拖到此处或<em>点击上传</em>',
        fileSizeTip: 'jpg/png 文件大小应小于 500kb',

    },
}

const i18n = createI18n({
    locale: 'en', // 设置默认语言
    fallbackLocale: 'en', // 如果找不到对应语言，使用该语言
    messages,
})

export default i18n;
