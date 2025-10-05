<script setup>
import movie from '@/assets/img/movie.png'
import { RouterLink, useRoute } from 'vue-router'

const isActiveLink = (routePath) => {
  const route = useRoute()
  return route.path === routePath
}
</script>

<template>
  <nav class="bg-[#c38383] border-b border-purple">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center md:items-stretch md:justify-start">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="movie" alt="Vue Jobs" />
            <span class="hidden md:block text-[#303c43] text-4xl font-bold ml-2">Potterworld</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/') ? 'text-white' : 'text-[#303c43]',
                  'font-bold',
                  'text-xl',
                  'rounded',
                  'py-1',
                  'px-2',
                  'hover:bg-[#402323]',
                  'hover:text-white',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/CharacterView"
                :class="[
                  isActiveLink('/CharacterView') ? 'text-white' : 'text-[#303c43]',
                  'font-bold',
                  'text-xl',
                  'rounded',
                  'py-1',
                  'px-2',
                  'hover:bg-[#402323]',
                  'hover:text-white',
                ]"
                >Characters</RouterLink
              >
              <RouterLink
                to="/Spells"
                :class="[
                  isActiveLink('/Spells') ? 'text-white' : 'text-[#303c43]',
                  'font-bold',
                  'text-xl',
                  'rounded',
                  'py-1',
                  'px-2',
                  'hover:bg-[#402323]',
                  'hover:text-white',
                ]"
                >Spells</RouterLink
              >
              <RouterLink
                to="/Movies"
                :class="[
                  isActiveLink('/Movies') ? 'text-white' : 'text-[#303c43]',
                  'font-bold',
                  'text-xl',
                  'rounded',
                  'py-1',
                  'px-2',
                  'hover:bg-[#402323]',
                  'hover:text-white',
                ]"
                >Movies</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
a {
  cursor: pointer;
}
</style>
