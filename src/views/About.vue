<script setup lang="ts">
import {ref} from 'vue'
import Select from '@/components/Select.vue'

const selected = ref('Zsolt');
const choices = [
    'Jani',
    'Zsolt',
    'Niki'
];

</script>

<template>
  <div class="about">
    <h1>Hi my name is: {{ selected }}</h1>
    <Select v-model:selected="selected" :choices="choices" />
  </div>
</template>
