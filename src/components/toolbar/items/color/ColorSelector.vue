<template>
  <div class="ColorSelector" @pointerdown="open">
    <div
      class="view"
      :style="{
        backgroundColor: modelValue,
      }"
    ></div>
    <input
      type="color"
      ref="inp"
      :value="modelValue"
      @input="(ev) => changeColor(ev)"
      :aria-label="label || ''"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const inp = ref<HTMLElement>()

const props = defineProps<{
  modelValue: string,
  label?: string,
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const open = () => {
  inp.value?.click()
}

const changeColor = (ev: Event) => {
  emit('update:modelValue', (ev.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.ColorSelector {
  position: relative;
  height: 26px;
  top: 2px;
  .view {
    position: absolute;
    width: 26px;
    height: 26px;
    top: 0;
    right: 0px;
    border: 2px solid #fff;
    border-radius: 4px;
    pointer-events: none;
    z-index: 1;
  }

  input {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: none;
  }
}
</style>
