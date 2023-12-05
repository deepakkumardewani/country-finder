<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useTheme } from "vuetify";
import data from "../assets/data.json";
const theme = useTheme();
const allCountries = data;
let countries = ref([]);
let regions = ref([]);
let selectedRegion = ref("");

onMounted(() => {
  allCountries = allCountries.map((country) => {
    return {
      name: "",
      nativeName: "",
      population: "",
      region: "",
      subRegion: "",
      tld: "",
      currencies: [],
      languages: [],
      borderCountries: [],
      capital: "",
    };
  });
  const mostPopulatedCountries = getMostPopulatedCountries();
  countries.value = mostPopulatedCountries;
  regions.value = getRegions();
  selectedRegion.value = regions.value[0];
});

function getRegions() {
  let tempRegions = [];
  allCountries.forEach((country) => {
    if (!tempRegions.includes(country.region)) {
      tempRegions.push(country.region);
    }
  });
  return tempRegions.sort();
}
function changeRegion(region) {
  selectedRegion.value = region;
  countries.value = allCountries.filter((country) => country.region === region);
}
function getMostPopulatedCountries() {
  const top8 = allCountries
    .sort((a, b) => b.population - a.population)
    .slice(0, 8);
  return top8;
}
function showDetails(country) {
  console.log(country);
}
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

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
      <v-col cols="2">
        <v-select
          :model-value="selectedRegion"
          label="Filter by region"
          @update:modelValue="changeRegion"
          :items="regions"
          hide-details
          variant="solo"
        ></v-select>
      </v-col>
  </div>
</template>

<style lang="scss" scoped></style>
