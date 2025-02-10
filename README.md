# Install Steps

Vue3 js on Laravel - Install Process

### Install Laravel

```bash
composer create-project laravel/laravel laravel_vue3
```

### Install node and run node server

```bash
npm install
```

### Install Vue3

```bash
npm install vue@latest
```

### Instal vitejs/plugin-vue

```bash
npm i @vitejs/plugin-vue
```

Instalará el paquete @vitejs/plugin-vue y lo añadirá a la lista de dependencias en tu archivo package.json.

> Permite que Vite procese archivos .vue correctamente.

### Install Router

```bash
npm install vue-router
```

### modify the file vite-config.js

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```

### create file resources\views\layouts\App.vue

```vue
<template>

    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 mb-8">
        <div class="container flex flex-wrap justify-start items-center mx-auto">
            <div class="w-full md:block md:w-auto">
                <ul class="flex flex-row space-x-4 p-2.5">
                    <li>
                        <router-link class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>
</script>

<style scoped> 
</style>
```

### create pages (example: resources\views\_pages\HomePage.vue)

```vue
<template>
  <div class="container mx-auto">
    <h1>Home Page</h1>
  </div>

</template>

<script setup>
</script>

<style scoped>
</style>
```

```vue
<template>
  <div class="container mx-auto">
    <h1>About Page</h1>
  </div>

</template>

<script setup>
</script>

<style scoped>
</style>
```

### create resources\js\router\index.js

```js
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
```



### modify resources\js\app.js

```js
import './bootstrap';
import { createApp } from 'vue';
import app from '../views/layouts/App.vue';
import router from './router';

createApp(app).use(router).mount('#app');
```

### start server

```bash
npm run dev &

php artisan serve
```
