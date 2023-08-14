/* eslint-disable */
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePartsStore = defineStore('parts', () => {
  const parts = ref(null);

  const getParts = async () => {
    const url = '/api/parts';
    const response = await fetch(url);
    parts.value = await response.json();
  }


  return { parts, getParts }
});
