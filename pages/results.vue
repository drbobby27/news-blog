<template>
  <div class="p-4  mt-[12vh]">
    <div v-if="store.resultsQuery?.length">
      <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Results for: '{{ store.searchQuery }}'
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <card
          v-for="({
            title,
            urlToImage,
            description,
            url
          }, index) in store.resultsQuery"
          :key="`${title}-${index}`"
          :title="title"
          :image="urlToImage"
          :description="description"
          :url="url"
        />
      </div>
    </div>

    <div v-else>
      <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        No Results for: '{{ store.searchQuery }}'
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@/stores/useQuery.js";

const store = useQuery();
</script>