<template>
    <header class="fixed w-full container top-0 z-50">
      <div class="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 rounded-b-lg shadow">
        <nav class="px-2 md:px-4 lg:px-6">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <NuxtLink to="/" class="flex-shrink-0">
                <Logo />
              </NuxtLink>
              
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NuxtLink 
                  v-for="link in navigationLinks" 
                  :key="link.path"
                  :to="link.path"
                  class="text-neutral-900 dark:text-neutral-100 inline-flex items-center px-1 pt-1 border-b-2 transition-colors duration-200"
                  :class="[
                    $route.path === link.path
                      ? 'border-neutral-900 dark:border-neutral-100'
                      : 'border-transparent hover:border-neutral-500 dark:hover:border-neutral-400'
                  ]"
                >
                  {{ link.name }}
                </NuxtLink>
              </div>

            </div>
    
            <ThemeToggle />
            <!-- Mobile menu button -->
            <div class="flex items-center sm:hidden">
              <button 
                @click="isOpen = !isOpen"
                class="inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800"
              >
                <Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
              </button>
            </div>
          </div>
    
          <!-- Mobile menu -->
          <div v-show="isOpen" class="sm:hidden">
            <div class="pt-2 pb-3 space-y-1">
              <NuxtLink
                v-for="link in navigationLinks"
                :key="link.path"
                :to="link.path"
                class="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                :class="[
                  $route.path === link.path
                    ? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100'
                ]"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
</template>

<script setup>
const isOpen = ref(false)

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>