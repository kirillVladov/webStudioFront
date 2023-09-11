<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  isResizable: {
    type: Boolean,
    default: false,
  },
});

const value = ref(props.modelValue);
const emit = defineEmits(["update:modelValue"]);
const onInput = (e: InputEvent) => {
  value.value = (e.target as HTMLInputElement).value;
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="text-area" :class="{ static: !isResizable }">
    <textarea
      style="width: 100%; height: 100%"
      :value="value"
      @input="onInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<style lang="scss">
@import "src/style/common/text-area";
</style>
