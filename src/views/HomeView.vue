<script setup lang="ts">
import SoundButton from '../components/SoundButton.vue'

import { ref } from 'vue'
import sound1 from '../assets/sounds/1.mp3'
import sound2 from '../assets/sounds/2.mp3'
import sound3 from '../assets/sounds/3.mp3'
import sound4 from '../assets/sounds/4.mp3'
import sound5 from '../assets/sounds/5.mp3'
import sound6 from '../assets/sounds/6.mp3'
import sound7 from '../assets/sounds/7.mp3'
import sound8 from '../assets/sounds/8.mp3'
import sound9 from '../assets/sounds/9.mp3'
import sound10 from '../assets/sounds/10.mp3'
import sound11 from '../assets/sounds/11.mp3'
import sound12 from '../assets/sounds/12.mp3'
import sound13 from '../assets/sounds/13.mp3'
import sound14 from '../assets/sounds/14.mp3'
import sound15 from '../assets/sounds/15.mp3'
import sound16 from '../assets/sounds/16.mp3'
import sound17 from '../assets/sounds/17.mp3'

const soundvalues = ref([
  sound1,
  sound2,
  sound3,
  sound4,
  sound5,
  sound6,
  sound7,
  sound8,
  sound9,
  sound10,
  sound11,
  sound12,
  sound13,
  sound14,
  sound15,
  sound16,
  sound17,
])
const keyvalues = ref([
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
])
</script>

<template>
  <main>
    <h1>Kalimba Player</h1>
    <p>Go nuts using your keyboad</p>
    <div style="display: flex; margin: 0 -0.5rem">
      <div v-for="(k, index) in keyvalues" style="margin: 0 0.5rem; height: 100%" :key="k">
        <SoundButton :sound="soundvalues[index]" :keypress="k" :index="index" :maxkeys="keyvalues.length" />
      </div>
    </div>
    <p>
      Sound Effect from
      <a
        href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=95917">Pixabay</a>
    </p>
    <p>Version 0.3</p>
  </main>
</template>
