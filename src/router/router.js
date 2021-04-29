import {createWebHistory, createRouter} from 'vue-router';
import Home from './../views/Home.vue';

const routes = [
    {
        path:'/',
        name: "Home",
        component: Home
    },
    {
        path:'/create',
        name:"Create",
        component: () => import('./../views/Create_user.vue')
    },
    {
        path:'/view',
        name:"View",
        component: () => import('./../views/View_students.vue')
    },
    {
        path:'/edit',
        name:"Edit",
        component: () => import('./../views/Edit_user.vue')
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router