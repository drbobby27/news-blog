<template>
  <div class="p-4  mt-[12vh]">
    <div v-if="results?.length">
      <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Results for: '{{ searchQuery }}'
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <card
          v-for="{
            title,
            urlToImage,
            description,
            url
          } in results"
          :key="title"
          :title="title"
          :image="urlToImage"
          :description="description"
          :url="url"
        />
      </div>
    </div>

    <div v-else>
      <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        No Results for: '{{ searchQuery }}'
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@/stores/useQuery.js";

const store = useQuery();
const { resultsQuery, searchQuery } = store;

const results = computed(() => resultsQuery || []);


console.log(results.value, "computed result pinia");
</script>
