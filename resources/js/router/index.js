import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../views/_pages/HomePage.vue';
import About from '../../views/_pages/AboutPage.vue';
import NotFound from '../../views/_pages/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/:pathMatch(.*)*', // 404
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;