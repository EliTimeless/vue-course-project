<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import bgImage from '@/assets/img/hogwarts-wallpaper.jpg'

defineProps({
  title: {
    type: String,
    default: 'Welcome to wizard world of Harry Potter',
  },
})
</script>

<template>
  <section
    class="w-full h-screen bg-center bg-cover"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center h-full">
      <div class="text-center">
        <h1
          class="text-8xl m-5 py-5 font-bold bg-gradient-to-r from-[#7d3bba] via-[#d45858] to-[#1c9ae3] bg-clip-text text-transparent animate-pulse"
        >
          {{ title }}
        </h1>
        <div class="font-bold">
          <p class="py-5 my-5 text-3xl">
            Find what

            <RouterLink
              class="text-[#7d3bba] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white ..."
              to="CharacterView"
              >characters</RouterLink
            >
            ,
            <RouterLink
              class="text-[#d45858] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white ..."
              to="/spells"
              >spells</RouterLink
            >
            and
            <RouterLink
              class="text-[#1c9ae3] transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white ..."
              to="/movies"
              >movies</RouterLink
            >
            are on this pages and discover this magic world!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
