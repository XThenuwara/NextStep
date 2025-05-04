<template>
  <footer class="bg-white dark:bg-neutral-800 rounded-t-3xl shadow-lg">
    <div class="mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="col-span-1 md:col-span-2">
          <div class="transition-transform">
            <Logo />
          </div>
          <p class="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Empowering careers in technology. Find your next opportunity with NextStep.
          </p>
          <div class="mt-6 flex gap-4">
            <a
              v-for="social in socials"
              :key="social.icon"
              :href="social.href"
              class="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-all duration-200"
            >
              <Icon :name="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-neutral-900 dark:text-neutral-100 text-lg font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="group flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
              >
                <span class="relative">
                  {{ link.name }}
                  <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-all group-hover:w-full"></span>
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-neutral-900 dark:text-neutral-100 text-lg font-semibold mb-6">Contact</h3>
          <ul class="space-y-4">
            <li v-for="contact in contacts" :key="contact.text">
              <a 
                :href="contact.href"
                class="group flex items-center gap-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200"
              >
                <span class="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-700/50 group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
                  <Icon :name="contact.icon" class="h-4 w-4" />
                </span>
                <span>{{ contact.text }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
        <p class="text-center text-neutral-600 dark:text-neutral-400">
          © {{ new Date().getFullYear() }} NextStep. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' }
]

const socials = [
  { icon: 'mdi:twitter', href: '#' },
  { icon: 'mdi:linkedin', href: '#' },
  { icon: 'mdi:github', href: '#' }
]

const contacts = [
  { icon: 'heroicons:envelope', text: 'contact@nextstep.com', href: 'mailto:contact@nextstep.com' },
  { icon: 'heroicons:phone', text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: 'heroicons:map-pin', text: '123 Tech Street, SF, CA', href: 'https://maps.google.com' }
]
</script>
