<script lang="ts" setup>
import {ref} from "vue";

defineProps({
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
    }
})

const value = ref("");
const emit = defineEmits(["update:modelValue"]);
const onInput = (text: string) => {
    value.value = text;
    emit("update:modelValue", text);
}
</script>

<template>
  <div class="text-area" :class="{static: !isResizable}">
      <textarea style="width: 100%; height: 100%" :value="value" @input="onInput" :placeholder="placeholder" />
  </div>
</template>

<style lang="scss">
@import "src/style/common/text-area";
</style>