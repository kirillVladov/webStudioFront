<script setup>
import ButtonComponent from "./ButtonComponent.vue";

defineProps({
  list: {
    type: Array,
    required: true,
  }
})

const emit = defineEmits(["select"]);

const onClick = (item) => {
  emit("select", item.value)
}
</script>

<template>
  <div class="button-group">
      <div
        class="button-group__item"
        v-for="(item, idx) in list"
        :key="`button-group-item-${idx}`"
      >
          <button-component
               class-purple
               :title="item.name"
               @press="onClick(item)"
          />
      </div>
  </div>
</template>