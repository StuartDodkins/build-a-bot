<template>
  <div>
    <h1> {{ part.title }} </h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script setup>

import { computed, defineProps } from 'vue';
import { usePartsStore } from '@/stores/partStore';

const partStore = usePartsStore();

const props = defineProps(['partType', 'id']);
const part = computed(() => partStore.parts[props.partType].find((item) => item.id === +props.id));

console.log(part.value);

</script>

<style scoped></style>
