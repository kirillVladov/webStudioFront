<script setup lang="ts">
import LangSvg from "../../assets/svg/LangSvg.vue";
import DropdownComponent from "./DropdownComponent.vue";
import LangList from "../../mocks/LangList.ts";
import { useSettingsStore } from "../../stores/settings/index.js";
import { computed } from "vue";
import { ComputedRef } from "vue";
import { ModelList } from "../../../types/common/Dropdown.js";
import { LangType } from "../../../types/common/settings";

const settingsStore = useSettingsStore();
const selectedItem: ComputedRef<ModelList> = computed(
  () =>
    LangList.find(({ value }) => value === settingsStore.lang) ?? {
      name: "En",
      value: "en",
    }
);

const onSelectLang = (item: ModelList) => {
  settingsStore.setLang(item.value as LangType);
};
</script>

<template>
  <div class="language-select">
    <lang-svg />
    <dropdown-component
      :list="LangList"
      :selected-item="selectedItem"
      @select="onSelectLang"
    />
  </div>
</template>

<style lang="scss">
@import "src/style/common/language-select";
</style>
