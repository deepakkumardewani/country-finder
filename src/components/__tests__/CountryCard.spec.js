import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import CountryCard from "@/components/CountryCard.vue";

describe("check for CountryCard component", () => {
  const vuetify = createVuetify();
  const wrapper = mount(CountryCard, {
    global: {
      plugins: [vuetify],
    },
  });

  it("renders properly", () => {
    const card = wrapper.get("CountryCard");
    expect(card.exists()).toBe(true);
  });
  it("check if props is not undefined", () => {});
  it("renders 'v-card'", () => {});
  it("show 'Detail' on click of card", () => {});
});
