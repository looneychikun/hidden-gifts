<template >
  <UPage>
    <UPageSection
      title="Thanks for joining!"
    >
      <template #description>
        Lets take a minute and get your first profile setup.
        <br />
        You'll have a chance to make more later, to share different
        interests between friends, family, and coworkers!
      </template>
      <UStepper :items="stepperItems" :v-model="activeStep">
        <template #content="{ item }">
          <UForm :state="state">
            <UFormField label="Name" name="name">
              <UInput v-model="state.name" color="secondary"/>
            </UFormField>
            <UFormField label="ID" name="id">
              <UInput v-model="state.id" />
            </UFormField>
          </UForm>
        </template>
      </UStepper>
    </UPageSection>
  </UPage>
</template>

<script lang="ts" setup>
import type { StepperItem } from '@nuxt/ui';

const { user } = useUserSession();

const activeStep = ref(0);
const stepperItems: StepperItem[] = [
  {
    title: 'Basic Info',
  },
  {
    title: 'Interests',
  },
  {
    title: 'Confirmation',
  }
]

const state = reactive({
  name: user.name,
  id: user.id
})

</script>

<style>

</style>