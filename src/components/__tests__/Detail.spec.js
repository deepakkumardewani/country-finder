import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

import Detail from "@/components/Detail.vue";

describe("check for Detail component", () => {
  const vuetify = createVuetify();
  const wrapper = mount(Detail, {
    global: {
      plugins: [vuetify],
    },
  });

  it("renders properly", () => {
    const detail = wrapper.get("Detail");
    expect(detail.exists()).toBe(true);
  });
  it("check if props is not undefined", () => {});
  it("renders 'close button', 'country image' & 'region dropdown'", () => {});
  it("renders 'country data'", () => {});
  it("hides on clicking 'close' button", () => {});
});
