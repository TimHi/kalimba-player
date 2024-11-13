<script setup lang="ts">
import SoundButton from '../components/SoundButton.vue'
import monster from '../assets/monster.mp3'
import { ref } from 'vue'
const keyvalues = ref(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j']);
</script>

<template>
  <main>
    <h1>Kalimba Plimba</h1>
    <div style="display: flex; margin: 0 -0.5rem;">
      <div v-for="(k, index) in keyvalues" style="margin: 0 0.5rem; height: 100%;" :key="k">
        <SoundButton :sound="monster" :keypress="k" :index="index" :maxkeys="keyvalues.length" />
      </div>
    </div>
  </main>
</template>
