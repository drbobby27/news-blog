<template>
  <nav
    class="bg-gray-800 h-[10vh] flex flex-col items-center justify-center text-center"
  >
    <div class="text-yellow-400 text-4xl font-extrabold mb-4">
      <NuxtLink to="/">New Era News</NuxtLink>
    </div>
    <ul class="space-y-4 lg:space-y-0 lg:flex lg:space-x-8 text-white text-lg">
      <li>
        <NuxtLink
          :to="'/'"
          :class="isActive('/')"
          @mouseover="hoveredLink = '/'"
          @mouseleave="hoveredLink = ''"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          :to="'/about'"
          :class="isActive('/about')"
          @mouseover="hoveredLink = '/about'"
          @mouseleave="hoveredLink = ''"
        >
          About US
        </NuxtLink>
      </li>

      <li class="relative">
        <input
          v-model="searchQuery"
          @keyup.enter="handleQuery"
          placeholder="Search..."
          class="p-1 lg:p-0.5 rounded-lg text-gray-800 border border-gray-400 w-48 lg:w-36 text-sm lg:text-xs"
        />
        <button
          @click="handleQuery"
          class="absolute right-0 top-0 mt-1 mr-1 text-yellow-400"
        >
          🔍
        </button>
        <p v-if="error" class="text-red-500 text-xs mt-1">{{ error }}</p>
      </li>
    </ul>
    <div class="lg:hidden absolute top-4 right-4">
      <button @click="toggleMenu" class="text-yellow-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useQuery } from '@/stores/useQuery.js'

const store = useQuery();

const hoveredLink = ref("");
const searchQuery = ref("");
const error = ref("");

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const route = useRoute();

const isActive = (path: string) => {
  if (hoveredLink.value === path) {
    return "hover:text-yellow-300 transition-colors duration-300";
  }
  return route.path === path && hoveredLink.value === ""
    ? "text-yellow-300 transition-colors duration-300"
    : "hover:text-yellow-300 transition-colors duration-300";
};

const handleQuery = async () => {
  store.setSearchQuery(searchQuery.value);
  await navigateTo('/results');
  searchQuery.value = '';
};

</script>
