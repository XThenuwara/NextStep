import type { DirectusUser } from '#shared/types/schema'
import { ref, computed } from 'vue';

let instance: ReturnType<typeof createAuthStore> | null = null;

function createAuthStore() {
  const user = ref<DirectusUser | null>(JSON.parse(localStorage.getItem('auth:user') || 'null'))
  const token = ref<string | null>(localStorage.getItem('auth:token') || null)
  const isAuthenticated = computed(() => !!token.value)

  const set = (key: 'user' | 'token', value: any) => {
    if (key === 'user') {
      user.value = value;
      localStorage.setItem('auth:user', JSON.stringify(value));
    } else if (key === 'token') {
      token.value = value;
      localStorage.setItem('auth:token', value || '');
    }
  };

  const login = async (credentials: { email: string, password: string }) => {
    try {
      const response = await $fetch('/api/connect/login', {
        method: 'POST',
        body: credentials
      })

      const userResponse = await $fetch('/api/connect/get-current-user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${response.data?.access_token}`
        }
      })
      
      if (response?.data.access_token) {
        set('token', response.data.access_token)
        set('user', userResponse.data)
        return true
      }
      return false
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  };

  const register = async (data: { firstName: string, lastName: string, email: string, password: string }) => {
    try {
      const response = await $fetch('/api/connect/signup', {
        method: 'POST',
        body: {
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName
        }
      });

      if (response.success) {
        return await login({ email: data.email, password: data.password });
      }
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    set('user', null)
    set('token', null)
  }

  return {
    user,
    token,
    isAuthenticated,
    set,
    login,
    logout,
    register
  }
}

export const useAuthStore = () => {
  if (!instance) {
    instance = createAuthStore();
  }
  return instance;
}