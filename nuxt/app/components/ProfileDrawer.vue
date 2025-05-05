<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useAuthStore } from '~/lib/store/auth-store';

const authStore = useAuthStore();
const isOpen = ref(false);

const toggleDrawer = () => {
	isOpen.value = !isOpen.value;
};

const handleLogout = () => {
	authStore.logout();
	isOpen.value = false;
};

watch(() => authStore.user.value, (newUser) => {
  console.log('Updated user:', newUser);
});
</script>

<template>
	<div>
		<UDrawer direction="right">
			<UButton
				variant="soft"
				@click="toggleDrawer"
				class="transition-transform hover:scale-105 aspect-square rounded-full"
			>
				<Icon icon="tabler:user" class="h-[1.2rem] w-[1.2rem]" />
			</UButton>

			<template #content>
				<div v-if="authStore.isAuthenticated.value">
					<div class="min-w-96 min-h-96 size-full m-4 p-6">
						<p class="text-xl font-bold">Welcome, {{ authStore.user.value?.first_name }} {{ authStore.user.value?.last_name }}</p>
						<p class="opacity-75">Email: {{ authStore.user.value?.email }}</p>
						<UButton @click="handleLogout" class="mt-4">Logout</UButton>
					</div>
				</div>
				<div v-else>
					<div class="min-w-96 min-h-96 size-full m-4 p-6">
						<p class="text-lg font-bold">Please log in or sign up</p>
						<div class="mt-4 space-x-4">
							<NuxtLink to="/connect/login">Login</NuxtLink>
							<NuxtLink to="/connect/sign-up">Sign Up</NuxtLink>
						</div>
					</div>
				</div>
			</template>
		</UDrawer>
	</div>
</template>
