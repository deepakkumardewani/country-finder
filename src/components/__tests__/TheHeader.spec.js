import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import TheHeader from "@/components/TheHeader.vue";

describe("check for header", () => {
  const vuetify = createVuetify();

  it("renders properly", () => {
    const wrapper = shallowMount(TheHeader, {
      global: {
        plugins: [vuetify],
      },
    });
    const toolbar = wrapper.find("#toolbar");
    expect(toolbar.exists()).toBe(true);
  });
});
