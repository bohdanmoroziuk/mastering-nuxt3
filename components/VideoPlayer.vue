<script lang="ts" setup>
interface Props {
  videoId: string;
}

const props = defineProps<Props>()

const src = computed(() => `https://player.vimeo.com/video/${props.videoId}`)
</script>

<template>
  <iframe
    width="500"
    height="315"
    :src="src"
    title="Video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>
