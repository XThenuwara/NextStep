<template>
	<footer class="bg-white dark:bg-neutral-800 rounded-t-3xl shadow">
		<div class="mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<!-- Brand Section -->
				<div class="col-span-1 md:col-span-2">
					<Logo />
					<p class="mt-4 text-neutral-600 dark:text-neutral-400 max-w-md">
						Empowering careers in technology. Find your next opportunity with NextStep.
					</p>
					<div class="mt-6 flex space-x-6">
						<a
							href="#"
							class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
						>
							<Icon name="mdi:twitter" class="h-6 w-6" />
						</a>
						<a
							href="#"
							class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
						>
							<Icon name="mdi:linkedin" class="h-6 w-6" />
						</a>
						<a
							href="#"
							class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
						>
							<Icon name="mdi:github" class="h-6 w-6" />
						</a>
					</div>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-neutral-900 dark:text-neutral-100 text-lg font-semibold mb-4">Quick Links</h3>
					<ul class="space-y-3">
						<li v-for="link in quickLinks" :key="link.path">
							<NuxtLink
								:to="link.path"
								class="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
							>
								{{ link.name }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<!-- Contact -->
				<div>
					<h3 class="text-neutral-900 dark:text-neutral-100 text-lg font-semibold mb-4">Contact</h3>
					<ul class="space-y-3 text-neutral-600 dark:text-neutral-400">
						<li class="flex items-center space-x-3">
							<Icon name="heroicons:envelope" class="h-5 w-5" />
							<span>contact@nextstep.com</span>
						</li>
						<li class="flex items-center space-x-3">
							<Icon name="heroicons:phone" class="h-5 w-5" />
							<span>+1 (555) 123-4567</span>
						</li>
						<li class="flex items-center space-x-3">
							<Icon name="heroicons:map-pin" class="h-5 w-5" />
							<span>123 Tech Street, SF, CA</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
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
	{ name: 'Terms of Service', path: '/terms' },
];
</script>
