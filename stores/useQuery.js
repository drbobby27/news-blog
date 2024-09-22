import { defineStore } from 'pinia';

export const useQuery = defineStore('store', {
  state: () => ({
    searchQuery: '',
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
  },
});