<template>
    <header class="bg-darkModeElements px-4 py-8 md:p-8">
        <div class="flex justify-between items-center">
            <h1 class="font-bold text-lightWhite md:text-2xl">
                Where in the world?
            </h1>
            <div class="flex items-center gap-4">
                <Icon icon="ph:moon-fill" color="white" />
                <span class="text-lightWhite">Dark Mode</span>
            </div>
        </div>
    </header>
</template>

<script setup>
    import { Icon } from "@iconify/vue";
</script>
