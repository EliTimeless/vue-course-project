<script setup>
import { defineProps } from 'vue'

defineProps({
  character: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <Card
    class="p-4 rounded-lg border border-[#1c0f0f] flex flex-col h-full hover:shadow-xl hover:shadow-[#754c9b]"
  >
    <div class="flex justify-between items-center mb-2">
      <span class="font-bold">{{ character.name }}</span>
    </div>
    <img
      :src="character.image"
      alt="Character image"
      class="w-30 h-40 object-cover rounded-md mt-2"
    />
    <div v-if="character.alternateNames && character.alternateNames.length > 0">
      <strong>Alternate names:</strong> {{ character.alternateNames.join(', ') }}
    </div>
    <div><strong>House:</strong> {{ character.house }}</div>
    <div><strong>Ancestry:</strong> {{ character.ancestry }}</div>
  </Card>
</template>
