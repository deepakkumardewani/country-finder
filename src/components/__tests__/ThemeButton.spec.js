import ThemeButton from "@/components/ThemeButton.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createVuetify } from "vuetify";

describe("when theme button renders properly", () => {
  const vuetify = createVuetify();
  const wrapper = mount(ThemeButton, {
    global: {
      plugins: [vuetify],
    },
  });
  const button = wrapper.get("#theme-toggle");

  it("renders properly", () => {
    expect(button.exists()).toBe(true);
  });

  describe("when clicked", () => {
    const icon = wrapper.get("v-icon");
    it("changes to dark mode", async () => {
      await button.trigger("click");
      expect(icon.text()).toBe("fa-solid fa-sun");
    });
    it("changes to light mode", async () => {
      await button.trigger("click");
      expect(icon.text()).toBe("fa-solid fa-moon");
    });
  });
});
