<script setup>
import { ref, onMounted } from 'vue'

const spells = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://potterhead-api.vercel.app/api/spells')
    const data = await response.json()
    spells.value = data.map((spell) => ({
      id: spell.id,
      name: spell.name,
      description: spell.description,
    }))
  } catch (error) {
    console.log('Error fetching characters')
  }
})
</script>
<template>
  <h1 class="text-7xl text-[#fbdcdc] font-bold m-2 p-2 text-center">Spells</h1>
  <ul class="mx-5 my-3">
    <li class="list-none" v-for="spell in spells" :key="spell.id">
      <div class="text-[#fbdcdc] text-2xl">
        <span class="text-violet-300 mx-2">{{ spell.name }}</span
        >: {{ spell.description }}
      </div>
    </li>
  </ul>
</template>
