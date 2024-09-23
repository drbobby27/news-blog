<template>
  <div class="relative">
    <input v-model="searchQuery" @keyup.enter="handleQuery" placeholder="Search..."
      class="p-1 lg:p-0.5 rounded-lg text-gray-800 border border-gray-400 w-64 lg:w-48 text-sm lg:text-xs" />
    <button @click="handleQuery" class="absolute right-0 top-0 mt-1 mr-1 text-yellow-400">
      🔍
    </button>
    <p v-if=" error " class="text-red-500 text-xs mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">

import { useQuery } from "@/stores/useQuery.js";
const store = useQuery();
const searchQuery = ref( "" );
const error = ref( "" );
const config = useRuntimeConfig();
const KEY = ref( config.public.apiKey );

async function handleQuery() {
  async function handleFetching() {
    const URL_QUERY = `https://newsapi.org/v2/everything?q=${searchQuery.value}&apiKey=${KEY.value}`;
    const data = await $fetch( URL_QUERY );
    const { articles } = data

    store.setInputQuery( searchQuery.value );
    store.setResultQuery( articles );
    console.log( { articles }, 'articles search bar' );

    await navigateTo( "/results" );
    searchQuery.value = "";
  }

  if ( searchQuery.value.trim() ) {
    handleFetching()
  }
};
</script>