import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import Layout from "@/components/Layout.vue";

describe("check for layout component", () => {
  const vuetify = createVuetify();

  it("renders properly", () => {
    const wrapper = mount(Layout, {
      global: {
        plugins: [vuetify],
      },
    });
    const layout = wrapper.get("Home");

    expect(layout.exists()).toBe(true);
  });
});
