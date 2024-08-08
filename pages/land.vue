<template>
  <div class="w-full">
    <NuxtLayout>
      <LandingBenefits />
      <LandingFeatures />
      <LandingPricing />
      <LandingTeam />
      <LandingTestimonials />
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">

definePageMeta({
  layout: 'page'
});
</script>
