<script lang="ts" setup>
import ActionsHeader from "../components/actions/ActionsHeaderComponent.vue";
import { ActionStatus, ActionTab } from "../../types/actions";
import ActionsListComponent from "../components/actions/ActionsListComponent.vue";
import teamList from "../mocks/landing/TeamList";

const onFilter = (action: ActionTab) => {
  console.log(action);
};

const TEMPactions = [
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.declined,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.declined,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.declined,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.declined,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.allowed,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.awaiting,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.declined,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
  {
    id: 1,
    name: "ProjectCompanyName",
    status: ActionStatus.declined,
    description:
      "ProjectCompanyN ameDESCRIPTIONProj ectCompanyNameDESCRIPTIONProjec tCompanyNameDESCRIPTIO NProjectCompanyNameDESCRIPTION",
    date: "29-20-2023",
  },
];

const onOpenTask = (id: string) => {
  console.log(`${id} onOpenTask`);
};

const onStartChatAction = (id: string) => {
  console.log(`${id} onStartChat`);
};

const onDeleteAction = (id: string) => {
  console.log(`${id} onDelete`);
};
</script>

<template>
  <div class="actions">
    <actions-header @select="onFilter" />
    <actions-list-component
      :list="TEMPactions"
      @open-task="onOpenTask"
      @start-chat="onStartChatAction"
      @delete="onDeleteAction"
    />
  </div>
</template>

<style lang="scss">
@import "@/style/actions";
</style>
