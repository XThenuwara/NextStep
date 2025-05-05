<script setup lang="ts">
import { useAuthStore } from '~/lib/store/auth-store';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const errorMessage = ref<string | null>(null);
const isLoading = ref(false);

const handleLogin = async () => {
    errorMessage.value = null;
    isLoading.value = true;

    try {
        const success = await authStore.login({
            email: email.value,
            password: password.value,
        });

        if (success) {
            navigateTo('/');
        } else {
            errorMessage.value = 'Invalid email or password';
        }
    } catch (error: any) {
        console.error('Login error:', error);
        errorMessage.value = error.message || 'An error occurred during login. Please try again.';
    } finally {
        isLoading.value = false;
    }
};
</script>

<template>
	<div class="h-[70vh] flex items-center justify-center">
		<UCard class="w-full max-w-sm p-4 md:p-6 lg:p-8">
			<div class="space-y-6">
				<div class="text-center">
					<h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Welcome Back</h1>
					<p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Sign in to your account to continue</p>
				</div>

				<UForm state class="flex flex-col gap-4 items-center">
					<div label="Email" name="email" class="w-full">
						<UInput
							v-model="email"
							type="email"
							placeholder="Enter your email"
							icon="i-heroicons-envelope"
							class="w-full"
                            size="lg"
						/>
					</div>
					<di label="Password" name="password" class="w-full">
						<UInput
							v-model="password"
							type="password"
							placeholder="Enter your password"
							icon="i-heroicons-lock-closed"
							class="w-full"
                            size="lg"
						/>
					</di>

					<div v-if="errorMessage" class="text-sm text-red-500 dark:text-red-400">
						{{ errorMessage }}
					</div>

					<div>
						<UButton @click="handleLogin" size="lg" variant="solid" class="w-full" :loading="isLoading">Sign In</UButton>
					</div>
				</UForm>

				<div class="text-center text-sm text-neutral-500 dark:text-neutral-400">
					Don't have an account?
					<NuxtLink
						to="/connect/sign-up"
						class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
					>
						Sign up
					</NuxtLink>
				</div>
			</div>
		</UCard>
	</div>
</template>
