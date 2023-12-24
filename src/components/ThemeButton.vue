<template>
  <div>
    <v-btn icon @click="toggleTheme">
      <v-icon>{{
        theme.global.name.value === "dark"
          ? "fa-solid fa-moon"
          : "fa-solid fa-sun"
      }}</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
