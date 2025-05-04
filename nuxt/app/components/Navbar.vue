<template>
	<header class="fixed w-full container top-0 z-50">
		<div
			class="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-700 rounded-b-lg shadow-sm transition-all duration-300"
		>
			<nav class="px-2 md:px-4 lg:px-6">
				<div class="flex justify-between items-center h-16">
					<div class="flex items-center gap-x-6">
						<NuxtLink to="/" class="flex-shrink-0 transition-transform hover:scale-105">
							<Logo />
						</NuxtLink>

						<div class="hidden sm:flex sm:items-center sm:space-x-1">
							<NuxtLink
								v-for="link in navigationLinks"
								:key="link.path"
								:to="link.path"
								class="relative px-3 py-2 text-neutral-900 dark:text-neutral-100 rounded-md transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
								:class="[
									$route.path === link.path &&
										'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-900 dark:after:bg-neutral-100',
								]"
							>
								{{ link.name }}
							</NuxtLink>
						</div>
					</div>

					<div class="flex items-center gap-4">
						<ThemeToggle class="transition-transform hover:scale-105" />
						<!-- Mobile menu button -->
						<button
							@click="isOpen = !isOpen"
							class="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-700/50 transition-colors duration-200"
						>
							<Icon :name="isOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="h-6 w-6" />
						</button>
					</div>
				</div>

				<!-- Mobile menu -->
				<div v-show="isOpen" class="sm:hidden">
					<div class="py-2 space-y-1">
						<NuxtLink
							v-for="link in navigationLinks"
							:key="link.path"
							:to="link.path"
							class="block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
							:class="[
								$route.path === link.path
									? 'bg-neutral-100 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100'
									: 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-100',
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
const isOpen = ref(false);

const navigationLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Jobs', path: '/jobs' },
	{ name: 'About', path: '/about' },
	{ name: 'Contact', path: '/contact' },
];
</script>
