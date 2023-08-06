<script setup>
  defineProps({
    title: {
      type: String,
      default: ""
    },
    classPurple: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(["press"]);

  const onClick = () => {
    emit("press")
  }
</script>

<template>
  <div :class="{purple: classPurple}" class="btn" @click="onClick">
      <slot name="before-title" />
      {{title}}
      <slot name="after-title" />
  </div>
</template>