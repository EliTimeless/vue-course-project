<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    default: 'Welcome to wizard world of Harry Potter',
  },
})
</script>

<template>
  <section class="bg-[#1c0f0f] text-[#f4b7b7] py-20 mb-4 w-full h-500">
    <div class="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8 flex flex-col items-center h-full">
      <div class="text-center">
        <h1
          class="text-8xl m-5 py-5 font-bold bg-gradient-to-r from-[#7d3bba] via-[#d45858] to-[#1c9ae3] bg-clip-text text-transparent animate-pulse"
        >
          {{ title }}
        </h1>
        <p class="py-5 my-5 text-2xl font-semibold">
          Find what

          <RouterLink
            class="bg-gradient-to-r from-[#7d3bba] via-[#d45858] to-[#1c9ae3] bg-clip-text text-transparent animate-pulse"
            to="CharacterView"
            >characters</RouterLink
          >
          ,
          <RouterLink
            class="bg-gradient-to-r from-[#7d3bba] via-[#d45858] to-[#1c9ae3] bg-clip-text text-transparent animate-pulse"
            to="/spells"
            >spells</RouterLink
          >
          and
          <RouterLink
            class="bg-gradient-to-r from-[#7d3bba] via-[#d45858] to-[#1c9ae3] bg-clip-text text-transparent animate-pulse"
            to="/movies"
            >movies</RouterLink
          >
          are on this pages and discover this magic world!
        </p>
      </div>
    </div>
  </section>
</template>
