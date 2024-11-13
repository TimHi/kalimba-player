<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { onKeyStroke } from '@vueuse/core'
import trumpetSfx from '../assets/monster.mp3'
import { useSound } from '@vueuse/sound'
const { play, stop } = useSound(trumpetSfx)
onKeyStroke(['s', 'S', 'ArrowDown'], (e) => {
  e.preventDefault()
  play()
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
