import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                // 魔法注释 更好的缓存、调试友好、优化性能
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            // {
            //     path: '/dataScreen',
            //     name: 'dataScreen',
            //     meta: {
            //         title: '可视化大屏',
            //         permiss: '2',
            //     },
            //     component: () => import(/* webpackChunkName: "dashboard" */  '../views/dataScreen/index.vue'),
            // },
            {
                path: '/order',
                name: 'order',
                meta: {
                    title: '订单信息',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/order/index.vue'),
            },
            {
                path: '/users',
                name: 'users',
                meta: {
                    title: '用户信息',
                    permiss: '4',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/user/index.vue'),
            },
            {
                path: '/courier',
                name: 'courier',
                meta: {
                    title: '配送员信息',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/courier/index.vue'),
            },
            {
                path: '/feedback',
                name: 'feedback',
                meta: {
                    title: '用户反馈',
                    permiss: '6',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/feedback/index.vue'),
            },
            {
                path: '/info',
                name: 'info',
                meta: {
                    title: '注册用户数量',
                    permiss: '7',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/echarts/barEcharts.vue'),
            },
            {
                path: '/courierUser',
                name: 'courierUser',
                meta: {
                    title: '代取员用户',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/courierUser/index.vue'),
            },
            {
                path: '/courierReview',
                name: 'courierReview',
                meta: {
                    title: '代取员审核',
                    permiss: '9',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/courierReview/index.vue'),
            },
            {
                path: '/orderReview',
                name: 'orderReview',
                meta: {
                    title: '订单审核',
                    permiss: '10',
                },
                component: () => import(/* webpackChunkName: "dashboard" */  '../views/table/orderReview/index.vue'),
            },
            // {
            //     path: '/charts',
            //     name: 'basecharts',
            //     meta: {
            //         title: '图表',
            //         permiss: '11',
            //     },
            //     component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            // },
            {
                path: '/tabs',
                name: 'tabs',
                meta: {
                    title: 'tab标签',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/tabs.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router;
