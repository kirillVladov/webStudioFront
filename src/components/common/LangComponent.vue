<script setup lang="ts">
import LangSvg from "../../assets/svg/LangSvg.vue";
import DropdownComponent from "./DropdownComponent.vue";
import LangList from "../../mocks/LangList.ts";
import { useSettingsStore } from "../../stores/settings/index.js";
import {computed} from "vue";
import {ComputedRef} from "vue";
import {DropdownList} from "../../../types/common/Dropdown.js";
import {LangType} from "../../../types/common/settings";

const settingsStore = useSettingsStore();
const selectedItem: ComputedRef<DropdownList> = computed(() =>
    LangList.find(({value}) => value === settingsStore.lang) ?? {name: "En", value: "en"}
);

const onSelectLang = (item: DropdownList) => {
    settingsStore.setLang(item.value as LangType)
}
</script>

<template>
    <div class="language-select">
      <lang-svg />
      <dropdown-component
              class-white
              :list="LangList"
              :selected-item="selectedItem"
              @select="onSelectLang"
      />
    </div>
</template>

<style lang="scss">
  @import "src/style/common/language-select";
</style>
