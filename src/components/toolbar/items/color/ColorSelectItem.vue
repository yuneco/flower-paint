<template>
  <div class="ColorSelectItem">
    <CheckItem :icon="icon" :edge="edge" v-model="checked">
      <ColorSelector v-model="color" :label="label || icon" />
    </CheckItem>
  </div>
</template>

<script lang="ts" setup>
import CheckItem from '../CheckItem.vue'
import ColorSelector from './ColorSelector.vue'
import { computed } from 'vue'
import { PaletteIconSymbol } from '../../../icons/PaletteIconSymbol'
const props = withDefaults(defineProps<{
  modelValue: string
  checked?: boolean
  icon?: PaletteIconSymbol
  edge?: 'left' | 'right' | 'both' | 'none'
  label?: string
}>(),{
  checked: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void,
  (e: 'update:checked', v: boolean): void
}>()

const color = computed({
  get: () => props.modelValue,
  set: (v) => {
    emit('update:modelValue', v)
  },
})

const checked = computed({
  get: () => props.checked,
  set: (v) => {
    emit('update:checked', v)
  },
})
</script>
