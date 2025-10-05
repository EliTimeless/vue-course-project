<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const props = defineProps({
  visible: Boolean,
})

const emit = defineEmits(['add-character', 'update:visible'])

const newCharacter = ref('')
const newHouse = ref('')
const newAncestry = ref('')
const newAlternate = ref('')
const newImage = ref('')

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = () => {
    newImage.value = reader.result // base64 string
  }
  reader.readAsDataURL(file)
}

const addCharacter = () => {
  if (newCharacter.value.trim() !== '') {
    const newChar = {
      name: newCharacter.value,
      house: newHouse.value,
      ancestry: newAncestry.value,
      alternateNames: newAlternate.value ? [newAlternate.value] : [],
      image: newImage.value,
    }
    emit('add-character', newChar)
  }
}
</script>

<template>
  <form @submit.prevent="addCharacter">
    <div class="space-y-12">
      <div class="border-b border-white/10 pb-12">
        <h2 class="text-base/7 font-semibold text-white" for="newCharacter">Add your character</h2>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-lg font-medium text-[#402323]"
              >Your full name</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
              >
                <input
                  type="text"
                  id="newCharacter"
                  name="newCharacter"
                  v-model="newCharacter"
                  placeholder="Albus Granger"
                  class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-700 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-lg font-medium text-[#402323]"
              >Your Hogwarts House</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
              >
                <input
                  type="text"
                  id="newHouse"
                  name="newHouse"
                  v-model="newHouse"
                  placeholder="Gryffindor"
                  class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-700 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-lg font-medium text-[#402323]"
              >Your ancestry</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
              >
                <input
                  type="text"
                  id="newAncestry"
                  name="newAncestry"
                  v-model="newAncestry"
                  placeholder="Half-Blood"
                  class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-700 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="username" class="block text-lg font-medium text-[#402323]"
              >Your new alternate name/nickname</label
            >
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white/5 outline-4 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
              >
                <input
                  type="text"
                  id="newAlternate"
                  name="newAlternate"
                  v-model="newAlternate"
                  placeholder="Dummy"
                  class="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-700 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div class="col-span-full">
            <label for="cover-photo" class="block text-lg font-medium text-[#402323]"
              >Cover photo</label
            >
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10"
            >
              <div class="text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="mx-auto size-12 text-gray-600"
                >
                  <path
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
                <div class="mt-4 flex text-sm/6 text-gray-400">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-transparent font-semibold text-[#402323] focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      type="file"
                      @change="handleFileUpload"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1 text-[#402323]">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-[#402323]">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-2 mt-4">
      <button type="submit" class="px-4 py-2 bg-[#7d3bba] text-white rounded hover:bg-[#1c9ae3]">
        Save
      </button>
    </div>
  </form>
</template>
