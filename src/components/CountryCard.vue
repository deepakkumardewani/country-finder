<script setup>
defineProps(["countries", "showDetails"]);
</script>
<template>
  <v-card
    v-for="(country, index) in countries"
    :key="index"
    class="my-3 bg-elementBg md:tw-w-[300px] tw-w-[400px]"
    height="350"
    :ripple="false"
    @click="showDetails(country)"
  >
    <v-img
      height="200"
      :src="country.flag"
      cover
      class="text-white tw-border-b tw-border-gray-200"
    ></v-img>
    <v-card-text class="bg-elementBg">
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
</template>

<style lang="scss" scoped></style>
