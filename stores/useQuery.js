import { defineStore } from "pinia";

export const useQuery = defineStore("store", {
  state: () => ({
    searchQuery: '',
    resultsQuery: []
  }),
  actions: {
    setInputQuery(input) {
      this.searchQuery = input;
    },
    setResultQuery(dataApi) {
      this.resultsQuery = dataApi; 
    }
  }
});
