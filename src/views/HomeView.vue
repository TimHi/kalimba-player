<script setup lang="ts">
import SoundButton from '../components/SoundButton.vue'
import sounds from '../modules/sounds';
import { ref } from 'vue'
const keyvalues = ref(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j']);
</script>

<template>
  <main>
    <h1>Kalimba Geplinka</h1>
    <div style="display: flex; margin: 0 -0.5rem;">
      <div v-for="(k, index) in keyvalues" style="margin: 0 0.5rem; height: 100%;" :key="k">
        <SoundButton :sound="sounds[`${index}`]" :keypress="k" :index="index" :maxkeys="keyvalues.length" />
      </div>
    </div>
    <p>Sound Effect from <a
        href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=95917">Pixabay</a>
    </p>
  </main>
</template>
