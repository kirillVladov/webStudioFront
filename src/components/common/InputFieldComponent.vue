<script lang="ts" setup>
import {ref} from "vue";

defineProps ({
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: ""
  },
  placeholder: {
    type: String,
    default: "",
  },
})

const value = ref("");
const emit = defineEmits(["update:modelValue"]);
const onInput = (text: string) => {
    value.value = text;
    emit("update:modelValue", text);
}
</script>

<template>
  <div class="input-field">
      <input :type="type" :value="modelValue" @inpu="onInput" :placeholder="placeholder">
  </div>
</template>

<style lang="scss">
@import "src/style/common/input-field";
</style>