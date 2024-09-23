 <template>
  <div class="p-4 mt-[12vh]">
    <div v-if="paginatedResults.length">
      <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        Results for: '{{ store.searchQuery }}'
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        <card
          v-for="({ title, urlToImage, description, url }, index) in paginatedResults"
          :key="`${title}-${index}`"
          :title="title"
          :image="urlToImage"
          :description="description"
          :url="url"
        />
      </div>

      <div class="flex justify-center mt-6">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 mr-2 text-white bg-gray-600 rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span class="text-lg font-semibold">{{ currentPage }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 ml-2 text-white bg-gray-600 rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>

    <div v-else-if="!paginatedResults.length && store.searchQuery">
      <h2 class="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        No Results for: '{{ store.searchQuery }}'
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useQuery } from "@/stores/useQuery.js";

const store = useQuery();
const resultsPerPage = 6; 
const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(store.resultsQuery.length / resultsPerPage);
});

const paginatedResults = computed(() => {
  const start = (currentPage.value - 1) * resultsPerPage;
  const end = start + resultsPerPage;
  return store.resultsQuery.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>
