import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import Home from "@/components/Home.vue";

describe("check for Home component", () => {
  const vuetify = createVuetify();
  const wrapper = shallowMount(Home, {
    global: {
      plugins: [vuetify],
    },
  });

  it("renders 'search bar', 'sort dropdown' & 'region dropdown'", () => {
    const searchBar = wrapper.find("#search-bar");
    const sortDropdown = wrapper.find("#sort-dropdown");
    const regionDropdown = wrapper.find("#region-dropdown");
    expect(searchBar.exists()).toBe(true);
    expect(sortDropdown.exists()).toBe(true);
    expect(regionDropdown.exists()).toBe(true);
  });
});
