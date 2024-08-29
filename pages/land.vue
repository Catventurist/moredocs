<template>
  <div>
    <NuxtLayout>
      <ArticleCardList />
      <LandingBenefits />
      <LandingFeatures />
      <LandingPricing />
      <LandingTestimonials />
      <LandingFaq />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  title: 'Landing Page',
  description: 'Some pretty components',
  icon: 'lucide:plane',
  layout: 'default',
  path: '/land'
})
</script>