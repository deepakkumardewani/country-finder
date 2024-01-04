import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import Detail from "@/components/Detail.vue";

describe("check for Detail component", () => {
  const vuetify = createVuetify();
  const wrapper = shallowMount(Detail, {
    props: {
      country: {
        name: "India",
        nativeName: "India",
        flag: "a",
        population: 123,
        region: "a",
        subregion: "a",
        tld: [],
        currencies: [],
        languages: [],
        borders: [],
        capital: "a",
      },
    },
    global: {
      plugins: [vuetify],
    },
  });

  it.skip("renders properly", () => {
    const detail = wrapper.get("Detail");
    expect(detail.exists()).toBe(true);
  });
  it.skip("check if props is not undefined", () => {});
  it.skip("renders 'close button', 'country image' & 'region dropdown'", () => {});
  it("renders 'country data'", () => {
    const name = wrapper.get("#name");
    expect(name.text()).toContain("India");
  });
  it.skip("hides on clicking 'close' button", () => {});
});
