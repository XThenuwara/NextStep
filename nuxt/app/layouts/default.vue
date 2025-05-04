<template>
  <div class="min-h-screen flex flex-col container mx-auto">
    <Navbar />
    
    <!-- Main Content -->
    <main class="flex-grow pt-16">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>