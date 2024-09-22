<template>
  <div class="flex flex-col min-h-screen">
    <navbar-comp />
    <main class="flex-grow overflow-y-auto">
      <slot />
    </main>
    <footer-comp />
  </div>
</template>

<script setup lang="ts">
// State to track which link is hovered
const hoveredLink = ref("");
const searchQuery = ref("");
const error = ref("");

// Toggle Menu for Mobile
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Get current route
const route = useRoute();

// Function to check if the current route is active
const isActive = (path: string) => {
  if (hoveredLink.value === path) {
    return "hover:text-yellow-300 transition-colors duration-300";
  }
  return route.path === path && hoveredLink.value === ""
    ? "text-yellow-300 transition-colors duration-300"
    : "hover:text-yellow-300 transition-colors duration-300";
};

// Perform search action
const performSearch = () => {
  if (searchQuery.value.trim()) {
    // Replace this URL with your search endpoint
    const searchUrl = `https://your-api-url/search?query=${searchQuery.value}`;

    // Perform fetch request to your search API
    fetch(searchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("No results found.");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the search results here
        console.log(data);
        error.value = ""; // Clear previous error
        // Process the data as needed
      })
      .catch((err) => {
        error.value = err.message; // Set error message
      });
  } else {
    error.value = "Please enter a search query.";
  }
};
</script>
