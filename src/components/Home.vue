import { useTheme } from "vuetify";
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

<template>
  <div>
    <v-toolbar dark>
      <v-toolbar-title class="ml-10 text-h5">Country Finder</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" icon>
        <v-icon>{{
          theme.global.name.value === "dark"
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon"
        }}</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<style lang="scss" scoped></style>
