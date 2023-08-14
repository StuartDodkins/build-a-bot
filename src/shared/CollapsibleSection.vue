/* eslint-disable */

<template>

  <div>
    <div class="header">
      <button v-if="isExpanded" @click="toggleExpand()">
      <slot name="collapse">
        &#x25B2; Collapse
      </slot>
    </button>
      <button v-if="!isExpanded" @click="toggleExpand()">
      <slot name="expand">
        &#x25BC; Expand
      </slot>
    </button>
    </div>
    <slot v-if="isExpanded">
    </slot>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

</script>

<style scoped>

  .header {
    background-color: #bbb;
    padding: 3px;
    cursor: pointer;
    font-size: 22px;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

</style>
