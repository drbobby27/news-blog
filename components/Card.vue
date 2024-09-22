<template>
  <div class="p-4">
    <div
      class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
    >
      <NuxtLink :to="url">
        <img :src="image || defaultImage" alt="News Image" class="w-full h-48 object-cover" />
      </NuxtLink>
      <div class="p-4 flex-1">
        <NuxtLink :to="url">
          <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
        </NuxtLink>
        <NuxtLink :to="url">
          <p class="text-gray-700 line-clamp-3" :title="description">
            {{ description }}
            <span v-if="hasMore">...</span>
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  image: String,
  description: String,
  url: String,
});

const defaultImage =
  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

const hasMore = computed(() => props?.description?.length > 100);
</script>

<style scoped>
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>