<script setup>
import { onMounted, ref } from "vue";

import Detail from "./Detail.vue";
import CountryCard from "./CountryCard.vue";

import Fuse from "fuse.js";

import data from "../assets/data.json";

let allCountries = data;
let searchQuery = ref("");
let countries = ref([]);
let regions = ref([]);
let sortValues = ref([]);
let selectedRegion = ref("");
let selectedSortType = ref("");
let selectedCountry = ref("");
let showDetail = ref(false);

onMounted(() => {
  allCountries = allCountries.map((country) => {
    let languages = [];
    let currencies = [];
    if (country.languages) {
      languages = Object.values(country.languages);
    }
    if (country.currencies) {
      currencies = Object.keys(country.currencies)[0];
    }

    return {
      name: country.name.common,
      nativeName: country.name.nativeName,
      flag: country.flags.png,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
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
  sortValues.value = ["name", "region", "capital", "population"];
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
  showDetail.value = true;
  selectedCountry.value = country;
}
</script>

<template>
  <v-slide-x-transition mode="in-out">
    <div v-show="!showDetail">
      <v-row class="mx-12 mt-10" justify="space-between">
        <v-col cols="12" sm="6" lg="4">
          <v-text-field
            id="search-bar"
            v-model="searchQuery"
            hide-details
            label="Search for a country"
            variant="solo"
            @update:model-value="searchCountry"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" lg="3">
          <v-select
            id="sort-dropdown"
            :model-value="selectedSortType"
            label="Sort by"
            :items="sortValues"
            hide-details
            variant="solo"
            @update:model-value="changeSort"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" lg="3">
          <v-select
            id="region-dropdown"
            :model-value="selectedRegion"
            label="Filter by region"
            :items="regions"
            hide-details
            variant="solo"
            @update:model-value="changeRegion"
          ></v-select>
        </v-col>
      </v-row>
      <div class="pa-10 d-flex flex-wrap justify-space-around">
        <CountryCard :countries="countries" :show-details="showDetails" />
      </div>
    </div>
  </v-slide-x-transition>
  <v-slide-x-transition mode="out-in">
    <Detail
      v-if="showDetail"
      :country="selectedCountry"
      transition="scroll-x-transition"
      @close="showDetail = false"
    />
  </v-slide-x-transition>
</template>

<style lang="scss" scoped></style>
