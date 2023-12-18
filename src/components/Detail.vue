<script setup>
const props = defineProps(["country"]);
</script>
<template>
  <div class="container ma-16">
    <v-btn @click="$emit('close')" class="mb-12">Back</v-btn>
    <v-row class="my-10">
      <v-col cols="12" lg="6" sm="12">
        <v-img height="400" :src="country.flag" cover></v-img>
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <div class="mx-lg-10 my-3 mx-sm-0">
          <h1 class="my-4">Belgium</h1>
          <v-row class="my-4">
            <v-col cols="12" lg="6" sm="12">
              <div><b>Population</b>: {{ country.population }}</div>
              <div><b>Region</b>: {{ country.region }}</div>
              <div><b>Sub Region</b>: {{ country.subregion }}</div>
              <div><b>Capital</b>: {{ country.capital }}</div>
            </v-col>
            <v-col cols="12" lg="6" sm="12">
              <div><b>Top Level Domain</b>: {{ country.tld.join(" | ") }}</div>
              <div><b>Currencies</b>: {{ country.currencies }}</div>
              <div><b>Languages</b>: {{ country.languages.toString() }}</div>
            </v-col>
          </v-row>
          <div>
            <b>Border Countries</b>:
            <v-chip class="ma-1" v-for="border in country.borders"
              >{{ border }}
            </v-chip>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
