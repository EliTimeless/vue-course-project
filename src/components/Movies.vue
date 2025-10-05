<script setup>
import { ref, onMounted } from 'vue'

const movies = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://potterhead-api.vercel.app/api/movies')
    const data = await response.json()
    movies.value = data.map((movie) => ({
      serial: movie.serial,
      title: movie.title,
      summary: movie.summary,
      directors: movie.directors,
      screenwriters: movie.screenwriters,
      producers: movie.producers,
      release_date: movie.release_date,
      music: movie.music_composers,
      poster: movie.poster,
    }))
  } catch (error) {
    console.log('Error fetching characters')
  }
})
</script>
<template>
    <h1 class="text-7xl text-[#fbdcdc] font-bold m-2 p-2 text-center">Movies</h1>
  <ul class="w-full grid gap-4 p-4"
      style="grid-template-columns: repeat(auto-fill, minmax(600px, 1fr))">
    <li class="list-none text-[#fbdcdc] text-2xl" v-for="(movie, index) in movies" :key="movie.serial">
      <Card class="p-4 rounded-lg border border-[#1c0f0f] flex flex-col h-full "
        >
        <div> <strong class="title">Movie number:</strong>{{ movie.serial }}</div>
        <div> <strong class="title">Summary:</strong>{{ movie.summary }}</div>
        <div> <strong class="title">Title:</strong>{{ movie.title }}</div>
        <div> <strong class="title">Summary:</strong>{{ movie.summary }}</div>
        <div> <strong class="title">Directors:</strong>{{ movie.directors.join(', ') }}</div>
        <div> <strong class="title">Screenwriters:</strong>{{ movie.screenwriters.join(', ') }}</div>
         <div><strong class="title">Producers:</strong> {{ movie.producers.join(', ') }} </div>
            
        <div>
            <strong class="title">Movie producers:</strong>
          {{ movie.release_date }}
        </div>
        <div><strong class="title">Movie composers:</strong>{{ movie.music.join(', ') }}</div>
        <img :src="movie.poster"
        class="w-xl h-xl"></img>
      </Card>
    </li>
  </ul>
</template>

<style>
.title {
  color:#d45858;
  padding-top: 20px ;
  margin-right: 10px;
}
</style>
