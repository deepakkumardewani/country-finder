import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import TheHeader from "@/components/TheHeader.vue";

describe("check for header", () => {
  const vuetify = createVuetify();

  it("renders properly", () => {
    const wrapper = mount(TheHeader, {
      global: {
        plugins: [vuetify],
      },
    });
    const button = wrapper.get("v-toolbar");

    expect(button.exists()).toBe(true);
  });
});
