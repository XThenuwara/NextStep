<template>
  <div class="bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 p-6 transition-all hover:shadow-md">
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          {{ job.title }}
        </h2>
        <p class="text-neutral-600 dark:text-neutral-400 mb-4">{{ job.company }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" v-if="job.type">
            {{ job.type }}
          </Badge>
          <Badge variant="secondary" v-if="job.location">
            {{ job.location }}
          </Badge>
          <Badge variant="secondary" v-if="job.salary_range">
            {{ job.salary_range }}
          </Badge>
        </div>
      </div>
      <UButton size="sm" color="neutral" class="font-bold rounded-ful">
        Apply Now
      </UButton>
    </div>
    <p class="text-neutral-600 dark:text-neutral-400 line-clamp-3">
      {{ job.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@/components/ui/badge'

interface Job {
  id: string
  title: string
  company: string
  type?: string
  location?: string
  salary_range?: string
  description: string
}

defineProps<{
  job: Job
}>()
</script>