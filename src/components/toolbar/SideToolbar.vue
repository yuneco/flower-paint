<template>
  <div class="SideToolbar" @touchstart="preventEvent">
    <CheckItem v-model="isAnchorRotateTool" icon="rotate" cornerStyle="round" />
    <CheckItem v-model="isAnchorMoveTool" icon="move" cornerStyle="round" />
    <div class="clear">
      <PaletteItem
        @check="confirmAndClear"
        icon="trash"
        label=""
        :disabled="!enableUndo"
        cornerStyle="round"
      />
    </div>
    <div class="undo">
      <PaletteItem
        @check="undo"
        icon="undo"
        label=""
        :disabled="!enableUndo"
        cornerStyle="round"
      />
    </div>

    <div class="info">
      <div class="infoItem" :class="{infoItem__new: hasNew}">
      <PaletteItem
        @check="info"
        icon="info"
        label=""
        cornerStyle="round"
      />
      </div>
    </div>

</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSymPaint } from '../../logics/canvas/useSymPaint'
import CheckItem from './items/CheckItem.vue'
import PaletteItem from './items/PaletteItem.vue'
import { useConfirmStore } from '../../stores/ConfirmStore'
import { useAppStore } from '../../stores/AppStore'
import { useVersionCheck } from '../../logics/versionCheck/useVersionCheck'

const { state: store, clear, undo, enableUndo } = useSymPaint()
const { confirm } = useConfirmStore()
const appStore = useAppStore()
const hasNew = useVersionCheck()

const isAnchorRotateTool = computed({
  set: (v: boolean) => {
    if (v) {
      store.tool = 'rotate:anchor'
    } else {
      store.tool = 'draw'
    }
  },
  get: () => store.tool === 'rotate:anchor',
})

const isAnchorMoveTool = computed({
  set: (v: boolean) => {
    if (v) {
      store.tool = 'scroll:anchor'
    } else {
      store.tool = 'draw'
    }
  },
  get: () => store.tool === 'scroll:anchor',
})

const confirmAndClear = async () => {
  const answer = await confirm(
    'Are you sure you want to clear all the canvas? This operation can not undo.',
    'CLEAR',
    'not clear',
    'danger'
  )
  if (answer === 'yes') {
    clear()
  }
}

const info = () => {
  appStore.modal = 'start'
}

// パレット上でのズームやテキスト選択を防止するためpreventDefaultする
const preventEvent = (ev: TouchEvent) => {
  ev.preventDefault()
}
</script>

<style lang="scss" scoped>
.SideToolbar {
  position: absolute;
  width: 100%;
  height: 80%;
  bottom: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 4px;
  user-select: none !important;
  filter: drop-shadow(0px 0px 6px #00000033);
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
  .radioGroup {
    display: flex;
    gap: 0;
  }

  .undo {
    padding-top: 12px;
  }
  .clear {
    padding-top: 12px;
  }
  .info {
    padding-top: 20vh;
    .infoItem {
      position: relative;
      &__new::after {
        position: absolute;
        content: '';
        top: 0;
        left: calc(50% - 18px);
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: rgb(236, 82, 128);
        border: 1px solid #fff;
        pointer-events: none;
      }
    }
  }
}
</style>
