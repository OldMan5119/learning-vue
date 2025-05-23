import Vue from 'vue'
import Router from 'vue-router'
import Layout from "@/layout";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/dashboard/index'),
                    name: 'Dashboard',
                    meta: {title: 'Dashboard', icon: 'dashboard', affix: true}
                }
            ]
        },
    ]
})

export default router