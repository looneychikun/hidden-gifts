<script setup lang="ts">
const { loggedIn } = useUserSession();

// if (loggedIn.value) {
//   // Skip homepage
//   navigateTo('/dash');
// }

const links = ref([
  {
    label: 'Create Account / Log In',
    to: '/api/login',
    icon: 'i-lucide-step-forward',
    external: true
  }
])

</script>

<template>
  <UPageHero
    headline="Secret Santa's"
    title="Hidden Gifts"
    description="Log in to get started with Secret Santa's Hidden Gifts."
    orientation="horizontal"
    reverse
    :links="links"
  >
    <NuxtImg
      src="/img/santa-flight-hero.png"
      alt="Santa Flying"
      class="rounded-lg border border-accented shadow-lg"
    />
  </UPageHero>
</template>

<style>
</style>