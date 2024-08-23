import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/About.vue'
import Forum from '../components/Forum.vue'
import MainLayout from '../layouts/MainLayout.vue'
import GlobalLayout from '../layouts/GlobalLayout.vue'

const routes = [
    {
        path: '/',
        redirect: '/about',
        component: GlobalLayout,
        children: [
            {
                path: 'about',
                component: About
            },
            {
                path: 'forum',
                component: Forum
            },
            // 其他不需要侧边栏的页面
        ]
    },
    {
        path: '/analyse',
        component: MainLayout, // 仅在/analyse及其子页面使用MainLayout
        children: [
            {
                path: '',
                component: () => import('../views/Platform.vue')
            },
            {
                path: 'Platform',
                component: () => import('../views/Platform.vue')
            },
            {
                path: 'UploadData',
                component: () => import('../views/UploadData.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
