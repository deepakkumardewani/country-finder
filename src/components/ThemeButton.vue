<template>
  <v-btn id="theme-toggle" icon @click="toggleTheme">
    <v-icon>{{
      theme.global.name.value === "dark"
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon"
    }}</v-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>
