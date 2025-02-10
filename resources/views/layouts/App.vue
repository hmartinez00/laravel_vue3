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