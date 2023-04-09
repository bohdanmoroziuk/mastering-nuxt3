<script lang="ts" setup>
interface Props {
  modelValue: boolean | undefined
}

interface Emits {
  (event: 'update:modelValue', payload: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const model = computed({
  get () {
    return props.modelValue
  },
  set () {
    emit('update:modelValue', !props.modelValue)
  }
})
</script>

<template>
  <label
    class="rounded text-white font-bold py-2 px-4 cursor-pointer"
    :class="{
      'bg-green-500': modelValue,
      'bg-gray-500': !modelValue,
    }"
  >
    <input
      v-model="model"
      type="checkbox"
      class="hidden"
    >
    {{ model ? 'Completed!' : 'Mark as complete' }}
  </label>
</template>

<style scoped>
::selection {
  display: none;
}
</style>
