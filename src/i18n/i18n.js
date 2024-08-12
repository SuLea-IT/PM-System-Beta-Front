import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        title: 'Spatial transcriptome database -- Li Bosheng Lab',
        about: 'About',
        analyse: 'Analyse',
        forum: 'Forum',
        english: 'English',
        light: 'Light',
    },
    zh: {
        title: '空间转录组数据库 -- 李博生实验室',
        about: '关于',
        analyse: '分析',
        forum: '论坛',
        english: '英语',
        light: '浅色',
    },
}

const i18n = createI18n({
    locale: 'en', // 设置默认语言
    fallbackLocale: 'en', // 如果找不到对应语言，使用该语言
    messages,
})

export default i18n
