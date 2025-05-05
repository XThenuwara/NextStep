<script setup lang="ts">
import { useAuthStore } from '~/lib/store/auth-store';

const authStore = useAuthStore();
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref<string | null>(null);
const isLoading = ref(false);

const handleSignUp = async () => {
  errorMessage.value = null;
  isLoading.value = true;

  try {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Passwords do not match';
      return;
    }

    const success = await authStore.register({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    });
    
    if (success) {
      navigateTo('/');
    } else {
      errorMessage.value = 'Failed to create account';
    }
  } catch (error: any) {
    console.error('Sign up error:', error);
    errorMessage.value = error.message || 'An error occurred during sign up. Please try again.';
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
          <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Create Account</h1>
          <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Sign up for a new account</p>
        </div>

        <UForm state class="flex flex-col gap-4 items-center">
          <div label="First Name" name="firstName" class="w-full">
            <UInput
              v-model="firstName"
              type="text"
              placeholder="Enter your first name"
              icon="i-heroicons-user"
              class="w-full"
              size="lg"
            />
          </div>
          <div label="Last Name" name="lastName" class="w-full">
            <UInput
              v-model="lastName"
              type="text"
              placeholder="Enter your last name"
              icon="i-heroicons-user"
              class="w-full"
              size="lg"
            />
          </div>
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
          <div label="Password" name="password" class="w-full">
            <UInput
              v-model="password"
              type="password"
              placeholder="Enter your password"
              icon="i-heroicons-lock-closed"
              class="w-full"
              size="lg"
            />
          </div>
          <div label="Confirm Password" name="confirmPassword" class="w-full">
            <UInput
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              icon="i-heroicons-lock-closed"
              class="w-full"
              size="lg"
            />
          </div>

          <div v-if="errorMessage" class="text-sm text-red-500 dark:text-red-400">
            {{ errorMessage }}
          </div>

          <div>
            <UButton @click="handleSignUp" size="lg" variant="solid" class="w-full" :loading="isLoading">Sign Up</UButton>
          </div>
        </UForm>

        <div class="text-center text-sm text-neutral-500 dark:text-neutral-400">
          Already have an account?
          <NuxtLink
            to="/connect/login"
            class="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Sign in
          </NuxtLink>
        </div>
      </div>
    </UCard>
  </div>
</template>