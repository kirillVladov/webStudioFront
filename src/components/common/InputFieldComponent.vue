<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  useBorder: {
    type: Boolean,
    default: false,
  },
});

const value = ref("");
const emit = defineEmits(["update:modelValue", "focus", "blur"]);
const onInput = (e: InputEvent) => {
  value.value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="input-field" :class="{ border: useBorder }">
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
      @focus="emit('focus')"
      @blur="emit('blur')"
    />
  </div>
</template>

<style lang="scss">
@import "src/style/common/input-field";
</style>
