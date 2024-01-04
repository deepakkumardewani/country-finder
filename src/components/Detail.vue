<script setup>
defineProps(["country"]);
</script>
<template>
  <div class="container ma-16">
    <v-btn class="mb-12 bg-elementBg" @click="$emit('close')">Back</v-btn>
    <v-row class="my-10">
      <v-col cols="12" lg="6" sm="12">
        <v-img height="400" :src="country.flag" cover></v-img>
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <div class="mx-lg-10 my-3 mx-sm-0">
          <span id="name" class="my-4 tw-text-5xl">{{ country.name }}</span>
          <v-row class="my-8">
            <v-col cols="12" lg="6" sm="12">
              <div>
                <b>Population</b>:
                {{
                  country.population.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })
                }}
              </div>
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
            <v-chip
              v-for="(border, index) in country.borders"
              :key="index"
              class="ma-1"
              >{{ border }}
            </v-chip>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped></style>
