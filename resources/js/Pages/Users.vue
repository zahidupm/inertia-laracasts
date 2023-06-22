<template>
    <Head title="Users" />
    <h1 class="text-3xl font-bold">Users</h1>

    <div class="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <div class="overflow-x-auto">
            <table class="min-w-full text-xs">
                <colgroup>
                    <col>
                    <col class="w-24">
                </colgroup>
                <thead class="dark:bg-gray-700">
                    <tr class="text-left">
                        <th class="p-3 font-bold text-md">Client</th>
                        <th class="p-3 text-md">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id"
                        class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                        <td class="p-3 text-md">
                            <p>{{ user.name }}</p>
                        </td>
                        <td class="p-3 text-right text-md">
                            <Link :href="'/users/' + user.id + '/edit'"
                                class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                            Edit
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <Pagination :links="users.links"></Pagination>
</template>
<script setup>
import Pagination from '../Shared/Pagination.vue';

defineProps({
    users: Array
})
</script>
