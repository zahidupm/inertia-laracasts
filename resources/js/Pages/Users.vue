<template>
    <h1>Users</h1>
    <Nav />

    <div style="margin-top: 420px">
        <p>The current time is {{ time }}</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
    </div>
</template>
<script setup>
    import { Link } from '@inertiajs/vue3';
import Nav from '../Shared/Nav.vue';
    defineProps({
        time: String
    })
    </script>
