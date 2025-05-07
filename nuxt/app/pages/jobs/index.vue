<script setup lang="ts">
const searchQuery = ref('');
const selectedType = ref('all');
const selectedWorkMode = ref('all');


export interface JobsResponse {
  jobs: Job[];
  status: string;
}
// Fetch jobs from the API
const { data: jobsData, pending, error } = await useFetch<JobsResponse>('/api/jobs/get-jobs');
console.log("🚀 ~ jobsData:", jobsData)

// Computed property for filtered jobs
const filteredJobs = computed(() => {
	if (!jobsData.value?.jobs) return [];

	return jobsData.value.jobs.filter((job: Job) => {
		const matchesSearch =
			!searchQuery.value ||
			job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			job.description?.toLowerCase().includes(searchQuery.value.toLowerCase());

		const matchesType = selectedType.value === 'all' || job.type === selectedType.value;
		const matchesLocation = selectedWorkMode.value === 'all' || job.work_mode === selectedWorkMode.value;

		return matchesSearch && matchesType && matchesLocation;
	});
});
</script>


<template>
	<div class="container mx-auto px-4 py-8">
		<!-- Header Section -->
		<div class="mb-8">
			<h1 class="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Find Your Next Role</h1>
			<p class="text-neutral-600 dark:text-neutral-400 max-w-2xl">
				Discover opportunities that match your skills and aspirations. Browse through our curated list of tech
				positions.
			</p>
		</div>

		<!-- Search and Filter Section -->
		<div
			class="bg-white dark:bg-neutral-800 rounded-xl border shadow border-neutral-200 dark:border-neutral-700 p-4 mb-8"
		>
			<div class="flex flex-col md:flex-row gap-4">
				<div class="flex-1">
					<UInput v-model="searchQuery" class="w-full" placeholder="Search" />
				</div>
				<div class="flex gap-4 h-full">
					<USelect
						v-model="selectedType"
						:items="[
							{ label: 'All Types', value: 'all' },
							{ label: 'Full Time', value: 'full-time' },
							{ label: 'Part Time', value: 'part-time' },
							{ label: 'Contract', value: 'contract' },
						]"
						placeholder="Job Type"
						class="w-[180px]"
					/>

					<USelect
						v-model="selectedWorkMode"
						:items="[
							{ label: 'All WorkModes', value: 'all' },
							{ label: 'Remote', value: 'remote' },
							{ label: 'On Site', value: 'on-site' },
							{ label: 'Hybrid', value: 'hybrid' },
						]"
						placeholder="Work Mode"
						class="w-[180px]"
					/>
				</div>
			</div>
		</div>

		<!-- Jobs List -->
		<div v-if="pending" class="flex justify-center items-center py-12">
			<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-900 dark:border-neutral-100"></div>
		</div>

		<div v-else-if="error" class="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
			{{ error.message }}
		</div>

		<div v-else class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
		</div>
	</div>
</template>

