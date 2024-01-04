import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import CountryCard from "@/components/CountryCard.vue";

describe("check for CountryCard component", () => {
  const vuetify = createVuetify();
  const wrapper = shallowMount(CountryCard, {
    props: {
      countries: [
        {
          name: "Bangladesh",
          nativeName: {
            ben: {
              official: "বাংলাদেশ গণপ্রজাতন্ত্রী",
              common: "বাংলাদেশ",
            },
          },
          flag: "https://flagcdn.com/w320/bd.png",
          population: 164689383,
          region: "Asia",
          subregion: "Southern Asia",
          tld: [".bd"],
          currencies: "BDT",
          languages: ["Bengali"],
          borders: ["MMR", "IND"],
          capital: "Dhaka",
        },
      ],
    },
    global: {
      plugins: [vuetify],
    },
  });

  it("renders the card", () => {
    const card = wrapper.find("#country-card");
    expect(card.exists()).toBe(true);
  });
  it("has valid props", () => {
    expect(wrapper.props().countries.length).toBeGreaterThan(0);
  });
});
