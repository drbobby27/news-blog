<template>
  <div class="p-4  mt-[12vh]">
    <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
      Trending News
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-center"
    >
      <card
        v-for="{ title, urlToImage, description, url } in value?.articles"
        :key="title"
        :title="title"
        :image="urlToImage"
        :description="description"
        :url="url"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const KEY = ref(config.public.apiKey);
const url: string = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${KEY.value}`;

const { data } = await useFetch(url);
const { value } = data;
</script>
