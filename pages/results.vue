<template>
  <div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-center"
    >
      <card
        v-for="{ title, urlToImage, description, url } in value?.articles"
        :key="title"
        :title="title"
        :image="urlToImage || defaultImage"
        :description="description"
        :url="url"
      />
    </div>

    <p>searchQuery: {{ searchQuery }}</p>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@/stores/useQuery.js";

const store = useQuery();
const { searchQuery } = store;

const config = useRuntimeConfig()
const KEY = ref(config.public.apiKey);

const defaultImage =
  "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";

const URL_QUERY = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${KEY.value}`;

const { data } = await useFetch(URL_QUERY);
const { value } = data;

</script>
