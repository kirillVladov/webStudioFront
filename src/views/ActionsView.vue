<script lang="ts" setup>
import ActionsHeader from "../components/actions/ActionsHeaderComponent.vue";
import { ActionStatus, ActionTab } from "../../types/actions";
import ActionsListComponent from "../components/actions/ActionsListComponent.vue";
import teamList from "../mocks/landing/TeamList";
import { onMounted } from "vue";
import { useActionStore } from "../stores/actions";

const actionsStore = useActionStore();

onMounted(() => {
  actionsStore.updateActionsList();
});

const onFilter = (action: ActionTab) => {
  actionsStore.updateActionsList(action);
};

const onOpenTask = (id: string) => {
  console.log(`${id} onOpenTask`);
};

const onStartChatAction = (id: string) => {
  console.log(`${id} onStartChat`);
};

const onDeleteAction = (id: string) => {
  actionsStore.deleteAction(id);
};
</script>

<template>
  <div class="actions">
    <actions-header @select="onFilter" />
    <actions-list-component
      :list="actionsStore.getActionsList"
      @open-task="onOpenTask"
      @start-chat="onStartChatAction"
      @delete="onDeleteAction"
    />
  </div>
</template>

<style lang="scss">
@import "@/style/actions";
</style>
