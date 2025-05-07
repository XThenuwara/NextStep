<template>
	<UCard class="transition-all hover:shadow-md">
		<div class="flex-1">
			<div class="flex justify-between items-center mb-3">
				<div class="flex items-center gap-3 mb-2">
					<DirectusImage
						v-if="companyData?.logo"
						:uuid="companyData.logo"
						:alt="companyData?.name || 'Company logo'"
						class="w-12 h-12 border border-muted shadow-sm rounded-full"
					/>
					<div>
						<h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
							{{ job.title }}
						</h2>
						<p class="text-sm text-neutral-600 dark:text-neutral-400" v-if="companyData?.name">
							{{ companyData.name }}
						</p>
					</div>
				</div>
				<UButton size="sm" color="neutral" class="font-bold rounded-full">Apply Now</UButton>
			</div>

			<p class="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-4">{{ job.description }}</p>
			<div class="flex flex-wrap gap-2 mb-4">
				<UBadge variant="soft" v-if="job.type">
					{{ job.type }}
				</UBadge>
				<UBadge variant="soft" v-if="job.work_mode">
					{{ job.work_mode }}
				</UBadge>
			</div>
		</div>
	</UCard>
</template>

<script setup lang="ts">
const props = defineProps<{ job: Job }>();

const companyData = computed(() => {
	if (!props.job.company || typeof props.job.company !== 'object') return null;
	return props.job.company;
});
</script>
