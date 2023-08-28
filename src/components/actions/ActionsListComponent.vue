<script lang="ts" setup>
defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="actions-list">
    <div
      class="actions-list__item"
      v-for="action in list"
      :key="`action-item-${action.id}`"
    >
      <div class="actions-list__item--status">
        {{ action.status }}
      </div>
      <div class="actions-list__item--contact">
        <div class="actions-list__item--name">
          {{ action.name }}
        </div>
        <div class="actions-list__item--description">
          {{ action.description }}
        </div>
      </div>
      <div class="actions-list__item--date">
        {{ action.date }}
      </div>
      <div class="actions-list__item--controllers">
        <span class="actions-list__item--message pointer"> message </span>
        <span class="actions-list__item--delete pointer"> delete </span>
      </div>
    </div>
  </div>
</template>
