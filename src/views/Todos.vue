<script lang="ts" setup>
import { useStore } from "vuex";
import { computed } from "vue";
//
import { useRef } from "@/utils/useRef";
import { StateType} from "@/store";

const store = useStore<StateType>();

const [name, setName] = useRef<string>('zsolt');
const todos = computed(()=> store.state.todos );
const isLoading = computed(()=> store.state.isLoading );

const onClick = (): void => {
  store.dispatch('getTodos');
}
</script>

<template>
<div class="Todos">
  <p>{{ name }}</p>
  <button @click="setName('Jani')">Chagne name</button>
  <button @click="onClick">Load todos</button>
  <p v-if="isLoading">Loading....</p>
  <ul v-else>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</div>
</template>

<style lang="scss" scoped>
.Todos {

}
</style>
