<template>
  <div class="CloseButton">
    <button @click="emit('click')">CLOSE</button>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    foreColor?: string
    bgColor?: string
  }>(),
  { foreColor: '#999', bgColor: '#fff' }
)
const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<style lang="scss" scoped>
@use 'sass:math';
$size: 32px;
.CloseButton {
  position: relative;
  width: 0;
  height: 0;
  left: math.div(-$size, 2);
  top: math.div(-$size, 2);
  button {
    font-size: 0;
    width: $size;
    height: $size;
    border: 2px solid v-bind('props.foreColor');
    font-size: 0;
    color: v-bind('props.foreColor');
    background-color: v-bind('props.bgColor');
    position: relative;
    border-radius: $size;
    cursor: pointer;
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      left: 0;
      top: math.div($size, 2) - 3px;
      background-color: currentColor;
      transform: rotate(45deg) scaleX(0.7);
      border-radius: 2px;
    }
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      left: 0;
      top: math.div($size, 2) - 3px;
      background-color: currentColor;
      transform: rotate(-45deg) scaleX(0.7);
      border-radius: 2px;
    }
    &:active {
      background-color: #aaa;
      color: #fff;
    }
  }
}
</style>
