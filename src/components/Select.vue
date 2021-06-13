<script setup lang="ts">
import { ref, defineProps, defineEmit } from 'vue'
import { useVModel, onClickOutside, useToggle   } from '@vueuse/core'
import { noop } from 'lodash'

const props = defineProps({
  selected: Object,
  choices: Array
});

const emit = defineEmit(['update:selected']);

const selected = useVModel(props, 'selected', emit);
const elementRef = ref(null);
const isOpen = ref(false);
const toggleIsOpen = useToggle(isOpen);

const setSelected = (item: any): void => {
  selected.value = item;
}

onClickOutside(elementRef, ()=> isOpen.value ? toggleIsOpen() : noop );

</script>

<template>
<div class="Select" ref="elementRef" @click="toggleIsOpen">
  <div class="Select__current">
    {{ selected }}
  </div>
  <div class="Select__dropdown" v-if="isOpen">
    <div
        class="Select__dropdown__item"
        v-for="(item, index) in choices"
        :key="index"
        @click="setSelected(item)"
    >
      {{ item }}
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
$padding: 8px;

@mixin box{
  border-radius: 4px;
  border: 1px solid black;
}

.Select {
  text-align: left;
  position: relative;
  cursor: pointer;
  user-select: none;

  &__current {
    @include box;
    padding: $padding;
  }

  &__dropdown {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 10px);
    overflow: hidden;
    @include box;

    &__item {
      padding: $padding;

      &:not(:last-child){
        border-bottom: 1px solid black;
      }

      &:hover {
        background-color: lightgrey;
      }
    }
  }

}
</style>
