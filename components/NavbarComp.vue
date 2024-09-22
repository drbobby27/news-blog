
<template>
  <nav class="bg-gray-800 w-full h-auto flex flex-col items-center justify-center text-center p-4 fixed top-0 z-50">
    <div class="text-yellow-400 text-4xl font-extrabold mb-4">
      <NuxtLink to="/">New Era Times</NuxtLink>
    </div>
    <ul
      :class="[
        'space-y-4 text-lg text-white lg:space-y-0 lg:flex lg:space-x-8',
        isOpen ? 'flex flex-col items-center' : 'hidden lg:flex',
      ]"
    >
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
          About Us
        </NuxtLink>
      </li>
      <li class="relative">
        <search-bar />
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
const hoveredLink = ref("");
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
</script>

<style scoped>
nav {
  width: 100%;
}
</style>
