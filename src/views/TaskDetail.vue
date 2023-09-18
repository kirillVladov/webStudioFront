<script lang="ts" setup>
import { useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { useTasksStore } from "../stores/tasks";
import SvgArrowDown from "../assets/svg/common/SvgArrowDown.vue";
import { Task } from "../../types/tasks";
import SvgFire from "../assets/svg/tasks/SvgFire.vue";
import { prepareCurrencyToSymbol } from "../services/common";
import UserImage from "../components/common/UserImage.vue";

const router = useRouter();
const taskStore = useTasksStore();
const task = ref<Task>();
onBeforeMount(() => {
  window.scrollTo(0, 0);
  taskStore
    .updateTask(router.currentRoute.value.params.id as string)
    .then((response) => (task.value = response));
});
</script>

<template>
  <div class="task-detail">
    <div class="task-detail__vacation">
      <div class="task-detail__vacation__header">
        <span class="task-detail__vacation__name">
          {{ task?.header }}
          <svg-fire
            v-if="task?.priority === 'medium' || task?.priority === 'high'"
            :color="task.priority === 'high' ? 'red' : 'yellow'"
          />
        </span>
        <span class="task-detail__vacation__price">
          {{ task?.price }} {{ prepareCurrencyToSymbol(task?.currency) }}
        </span>
      </div>
      <div class="task-detail__vacation__description">
        {{ task?.description }}
      </div>
    </div>
    <div class="task-detail__user">
      <div class="task-detail__user__avatar">
        <user-image :picture="task?.user.avatar" />
      </div>
      <div class="task-detail__user__name">
        {{ task?.user.surname }} {{ task?.user.name }}
      </div>
      <div class="task-detail__user__contacts">
        <div class="task-detail__user__contacts__header">contacts</div>
        <div class="task-detail__user__email">
          Email: {{ task?.user.email }}
        </div>
        <div class="task-detail__user__phone">
          Phone: {{ task?.user.phoneNumber }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/tasks/task-detail";
</style>
