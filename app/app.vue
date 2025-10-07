<script setup>
const { loggedIn } = useUserSession();

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'apple-mobile-web-app-title', content: 'Hidden Gifts' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
});

const title = 'Hidden Gifts';
const description = 'Hidden Gifts, a Secret Santa group management application for families and co-workers.';

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/assets/img/santa-flight-hero.png',
  twitterImage: '/assets/img/santa-flight-hero.png',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <UApp>
    <UHeader>
      <template #title>
        <GiftsLogo />
      </template>

      <template #right>
        <UColorModeButton />

        <div v-if="loggedIn">
          <UButton
            to="https://github.com/nuxt-ui-templates/starter"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }} Andrew Reenan
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/looneychikun/hidden-gifts"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="Source"
          variant="ghost"
          label="Source"
          class="text-muted"
        />
      </template>
    </UFooter>
  </UApp>
</template>
