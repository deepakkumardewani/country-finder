import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import Home from "@/components/Home.vue";

describe("check for Home component", () => {
  const vuetify = createVuetify();
  const wrapper = mount(Home, {
    global: {
      plugins: [vuetify],
    },
  });

  it("renders properly", () => {
    const home = wrapper.get("Home");
    expect(home.exists()).toBe(true);
  });

  it("renders 'search bar', 'sort dropdown' & 'region dropdown'", () => {});
  it("renders 'CountryCard' component", () => {});

  describe("check for Detail component", () => {
    it("shows if 'showDetail' is true", () => {});
    it("hides if 'showDetail' is false", () => {});
  });
});
