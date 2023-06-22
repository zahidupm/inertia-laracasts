<template>
    <Link class="text-black-500 hover:underline" :class="{ 'font-bold underline': active }">
    <slot />
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    active: Boolean
})
</script>
