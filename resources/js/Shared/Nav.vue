<template>
    <nav class="mt-6">
        <ul class="list-disc">
            <li><Link href="/" class="text-blue-500 hover:underline">Home</Link></li>
            <li><Link href="/users" class="text-blue-500 hover:underline">Users</Link></li>
            <li><Link href="/settings" class="text-blue-500 hover:underline">Settings</Link></li>
            <li><Link href="/logout" :data="{foo: 'bar'}" method="POST" as="button" class="text-blue-500 hover:underline">Logout</Link></li>
    </ul>
    </nav>
</template>

<script setup>
    import { Link } from '@inertiajs/vue3';
</script>
