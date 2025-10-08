<template>
  <div>
    Dashboard
    <p v-if="pending">Loading..</p>
    <div v-else-if="error" class="text-error">Error: {{ error.message }}</div>
    <div v-else class="text-success">{{ users }}<br/>{{ session.session.value?.id }}</div>
  </div>
</template>

<script lang="ts" setup>

const { data: users, pending, error, refresh} = await useFetch('/api/users');
const session = useUserSession();

</script>

<style>

</style>