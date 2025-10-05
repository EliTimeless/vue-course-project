<script setup>
import { ref, onMounted, computed } from 'vue'
import CardChar from '@/components/CardChar.vue'
import NewCharacter from '@/components/NewCharacter.vue'

const characters = ref([])
const isDrawerOpen = ref(false)

const link = ref('https://potterhead-api.vercel.app/')

const currentPage = ref(1)
const itemsPerPage = 9

const paginatedCharacters = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return characters.value.slice(start, end)
})

onMounted(async () => {
  try {
    const response = await fetch('https://potterhead-api.vercel.app/api/characters')
    const data = await response.json()
    characters.value = data.map((character) => ({
      name: character.name,
      alternateNames: character.alternate_names,
      house: character.house,
      ancestry: character.ancestry,
      image: character.image,
    }))
  } catch (error) {
    console.log('Error fetching characters')
  }
})
const handleAddCharacter = (character) => {
  characters.value.unshift(character)
  isDrawerOpen.value = false
}
</script>

<template>
  <div class="w-[800px] h-[800px] p-5 mx-auto bg-[#402323] text-[#fbdcdc]">
    <h1 class="text-7xl text-[#fbdcdc] font-bold m-2 p-2 text-center">Characters</h1>
    <div class="m-4">
      <button
        command="show-modal"
        commandfor="drawer"
        class="rounded-md bg-white/10 px-2.5 py-1.5 text-xl font-semibold text-white inset-ring inset-ring-white/5 hover:bg-[#d45858]"
      >
        Add new character
      </button>
      <el-dialog>
        <dialog
          id="drawer"
          aria-labelledby="drawer-title"
          class="fixed inset-0 size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent"
        >
          <el-dialog-backdrop
            class="absolute inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
          ></el-dialog-backdrop>

          <div tabindex="0" class="absolute inset-0 pl-10 focus:outline-none sm:pl-16">
            <el-dialog-panel
              class="group/dialog-panel relative ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <!-- Close button, show/hide based on slide-over state. -->
              <div
                class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out group-data-closed/dialog-panel:opacity-0 sm:-ml-10 sm:pr-4"
              >
                <button
                  type="button"
                  command="close"
                  commandfor="drawer"
                  @click="isDrawerOpen = true"
                  class="relative rounded-md text-black border border-[#402323] bg-[#fbdcdc] hover:text-[#fbdcdc] hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  <span class="absolute -inset-2.5"></span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    data-slot="icon"
                    aria-hidden="true"
                    class="size-6"
                  >
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>

              <div
                class="relative flex h-full flex-col overflow-y-auto bg-[#c38383] py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10"
              >
                <div class="px-4 sm:px-6">
                  <NewCharacter @add-character="handleAddCharacter" />
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </div>
    <ul
      class="w-full grid gap-4 p-4"
      style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))"
    >
      <li class="list-none" v-for="(character, index) in paginatedCharacters" :key="character.name">
        <CardChar :character="character" :index="index" />
      </li>
    </ul>
    <br />
    <vue-awesome-paginate
      :total-items="50"
      :items-per-page="5"
      :max-pages-shown="5"
      v-model="currentPage"
      @click="onClickHandler"
    />
    <br />

    <footer class="my-2 text-center">
      <a :href="link" target="_blank">Click full Potter API</a>
    </footer>
  </div>
</template>

<style>
button {
  cursor: pointer;
}
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}

.paginate-buttons {
  height: 40px;

  width: 40px;

  border-radius: 20px;

  cursor: pointer;

  background-color: rgb(242, 242, 242);

  border: 1px solid rgb(217, 217, 217);

  color: black;
}

.paginate-buttons:hover {
  background-color: #754c9b;
  color: #fbdcdc;
  border: none;
}

.active-page {
  background-color: #754c9b;

  border: 1px solid #754c9b;

  color: #fbdcdc;
}

.active-page:hover {
  background-color: #754c9b;
}
</style>
