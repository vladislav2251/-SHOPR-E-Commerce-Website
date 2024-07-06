import { createRouter, createWebHistory } from 'vue-router';

import Index from '@/view/pages/index.vue'

const routes = [
    { path: '/', name: 'Index', component: Index },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;