<script setup>
import { onMounted, ref } from "vue";
import { useTheme } from "vuetify";
import Detail from "./Detail.vue";

import Fuse from "fuse.js";

import data from "../assets/data.json";
const theme = useTheme();
let allCountries = data;
let searchQuery = ref("");
let countries = ref([]);
let regions = ref([]);
let sortValues = ref([]);
let selectedRegion = ref("");
let selectedSortType = ref("");
let selectedCountry = ref("");
let dialog = ref(false);

onMounted(() => {
  allCountries = allCountries.map((country) => {
    let languages = [];
    let currencies = [];
    if (country.languages) {
      languages = Object.values(country.languages);
    }
    if (country.currencies) {
      currencies = Object.keys(allCountries[0].currencies)[0];
    }
    return {
      name: country.name.common,
      nativeName: country.name.nativeName,
      flag: country.flags.png,
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
      tld: country.tld ? country.tld : [],
      currencies: currencies,
      languages: languages,
      borders: country.borders,
      capital: country.capital ? country.capital[0] : "Unknown",
    };
  });

  const mostPopulatedCountries = getMostPopulatedCountries();
  countries.value = mostPopulatedCountries;
  regions.value = getRegions();
  selectedRegion.value = regions.value[0];
  sortValues = ["name", "region", "capital", "population"];
  selectedSortType.value = "name";
  countries.value.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
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
function changeSort(type) {
  selectedSortType.value = type;
  countries.value.sort((a, b) => {
    if (type === "population") {
      if (a[type] < b[type]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (a[type].toLowerCase() > b[type].toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}
function searchCountry() {
  const options = {
    keys: ["name"],
    threshold: 0.2,
  };
  const fuse = new Fuse(allCountries, options);

  const result = fuse.search(searchQuery.value);
  countries.value = result.map((x) => x.item);
  if (searchQuery.value === "") {
    countries.value = allCountries;
  }
}
function getMostPopulatedCountries() {
  const top8 = allCountries
    .sort((a, b) => b.population - a.population)
    .slice(0, 8);
  return top8;
}
function showDetails(country) {
  console.log(country);
  dialog.value = true;
  selectedCountry.value = country;
}
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <div>
    <div v-show="!dialog">
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
      <v-row class="mx-12 mt-10" justify="space-between">
        <v-col cols="12" sm="6" lg="4">
          <v-text-field
            v-model="searchQuery"
            @update:modelValue="searchCountry"
            label="Search for a country"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" lg="3">
          <v-select
            :model-value="selectedSortType"
            label="Sort by"
            @update:modelValue="changeSort"
            :items="sortValues"
            hide-details
            variant="solo"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-select
            :model-value="selectedRegion"
            label="Filter by region"
            @update:modelValue="changeRegion"
            :items="regions"
            hide-details
            variant="solo"
          ></v-select>
        </v-col>
      </v-row>

      <div class="pa-10 d-flex flex-wrap justify-space-around">
        <v-card
          v-for="(country, index) in countries"
          :key="index"
          @click="showDetails(country)"
          class="my-3"
          height="350"
          width="300"
          :ripple="false"
        >
          <v-img
            height="200"
            :src="country.flag"
            cover
            class="text-white"
          ></v-img>
          <v-card-text>
            <div class="mb-3 text-h6">
              <b>{{ country.name }}</b>
            </div>
            <div>
              <b>Population:</b>
              {{
                country.population.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })
              }}
            </div>
            <div><b>Region:</b> {{ country.region }}</div>
            <div>
              <b>Capital:</b>
              {{ country.capital ? country.capital : "Unknown" }}
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>

    <v-slide-x-transition mode="out-in">
      <Detail
        @close="dialog = false"
        v-if="dialog"
        :country="selectedCountry"
        transition="scroll-x-transition"
      />
    </v-slide-x-transition>
  </div>
</template>

<style lang="scss" scoped></style>
