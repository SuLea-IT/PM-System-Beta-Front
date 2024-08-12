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
    },
}

const i18n = createI18n({
    locale: 'en', // 设置默认语言
    fallbackLocale: 'en', // 如果找不到对应语言，使用该语言
    messages,
})

export default i18n
