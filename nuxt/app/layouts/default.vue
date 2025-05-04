<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <!-- Logo -->
            <NuxtLink to="/" class="flex-shrink-0 flex items-center">
              <span class="text-xl font-bold text-gray-800">NextStep</span>
            </NuxtLink>
            
            <!-- Navigation Links -->
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink to="/" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Home
              </NuxtLink>
              <NuxtLink to="/about" class="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                About
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Company Info -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">NextStep</h3>
            <p class="text-gray-300">Building the future of technology</p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-gray-300 hover:text-white">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="text-gray-300 hover:text-white">About</NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-4">Contact</h3>
            <p class="text-gray-300">Email: contact@nextstep.com</p>
          </div>
        </div>
        
        <div class="mt-8 border-t border-gray-700 pt-8">
          <p class="text-center text-gray-400">© 2024 NextStep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Add any required component logic here
</script>