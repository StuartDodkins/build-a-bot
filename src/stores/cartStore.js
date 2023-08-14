/* eslint-disable */
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const cartTotal = computed(() => cart.value.reduce((acc, curr) => acc += curr.cost, 0));

  return { cart, cartTotal };
});
