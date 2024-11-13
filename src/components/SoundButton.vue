<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import { ref, computed } from 'vue'

const volume = ref(1)
const props = defineProps({
  sound: String,
  keypress: String,
  index: Number,
  maxkeys: Number,
})

function getHeight(index: number, max: number) {
  if (index <= max / 2) {
    return 2.5 * (index + 1)
  } else {
    return 2.5 * (max - index)
  }
}


const { play } = useSound(new URL(props.sound ?? "", import.meta.url).href, { volume })
const isAnimating = ref(false)
const height = computed(() => `${getHeight(props.index ?? 0, props.maxkeys ?? 0)}rem`)

onKeyStroke([props.keypress, (props.keypress ?? "").toUpperCase()], (e) => {
  e.preventDefault()
  play()

  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 400)
})
</script>

<template>
  <div :class="['box', { animate: isAnimating }]" :style="{ height: height }">
    <p>{{ (props.keypress ?? "").toUpperCase() }}</p>
  </div>
</template>

<style>
.box {
  display: flex;
  width: 4rem;
  height: use value from height ref as rem;
  border: 1px solid white;
  align-items: center;
  justify-content: center;
}

.box p {
  font-size: 2rem;
}

.animate {
  animation: example 0.4s;
}

@keyframes example {
  to {
    background-color: rgb(169, 154, 91);
  }
}
</style>
