<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="sidebar.collapse"
            background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index"
                                v-permiss="item.permiss">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
    {
        icon: 'Odometer',
        index: '/dashboard',
        title: '系统首页',
        permiss: '1',
    },
    // {
    //     icon: 'Histogram',
    //     index: '/dataScreen',
    //     title: '可视化大屏',
    //     permiss: '2',
    // },
    // {
    //     icon: 'DocumentCopy',
    //     index: '/tabs',
    //     title: '自定义通知',
    //     permiss: '3',
    // },
    // {
    //     icon: 'Film',
    //     index: '/info',
    //     title: '注册用户数量',
    //     permiss: '7',
    // },
    {
        icon: 'School',
        index: '3',
        title: '订单模块',
        permiss: '3',
        subs: [
            {
                index: '/order',
                title: '订单信息',
                permiss: '5',
            },
        ]
    },
    {
        icon: 'Memo',
        index: '4',
        title: '用户模块',
        permiss: '4',
        subs: [
            {
                index: '/users',
                title: '用户信息',
                permiss: '5',
            },
        ]
    },
    {
        icon: 'Tickets',
        index: '5',
        title: '代取员模块',
        permiss: '5',
        subs: [
            {
                index: '/courier',
                title: '代取员信息',
                permiss: '5',
            },
            {
                index: '/courierUser',
                title: '代取员用户',
                permiss: '8',
            },
        ]
    },
    {
        icon: 'Finished',
        index: '6',
        title: '审核模块',
        permiss: '6',
        subs: [
            {
                index: '/courierReview',
                title: '代取员审核',
                permiss: '9',
            },
            {
                index: '/orderReview',
                title: '订单审核',
                permiss: '10',
            },
        ]
    },
    {
        icon: 'Wallet',
        index: '7',
        title: '用户反馈管理',
        permiss: '7',
        subs: [
            {
                index: '/feedback',
                title: '用户反馈',
                permiss: '5',
            },
        ]
    },
    // {
    //     icon: 'Setting',
    //     index: '/icon',
    //     title: '自定义图标',
    //     permiss: '10',
    // },
    // {
    //     icon: 'PieChart',
    //     index: '/charts',
    //     title: 'echart图表',
    //     permiss: '11',
    // },
    {
        icon: 'Warning',
        index: '/permission',
        title: '权限管理',
        permiss: '13',
    },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar>ul {
    height: 100%;
}
</style>
