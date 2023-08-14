import { computed, onMounted } from 'vue';
import { usePartsStore } from '@/stores/partStore';

export default function useSearch(searchTerm) {
  const partStore = usePartsStore();
  partStore.getParts();
  const allParts = computed(() => (
    partStore.parts ?
      [
        ...partStore.parts.heads,
        ...partStore.parts.arms,
        ...partStore.parts.torsos,
        ...partStore.parts.bases,
      ]
      : []));

  const results = computed(() => {
    let searchResults;

    if (!searchTerm.value) {
      searchResults = allParts.value;
    }

    const lowerTerm = searchTerm.value.toLowerCase();
    searchResults = allParts.value.filter(
      (part) => part.title.toLowerCase().includes(lowerTerm),
    );

    return [...searchResults];
  });

  onMounted(() => console.log('Mounted: useSearch'));

  return { searchResults: results };
}
