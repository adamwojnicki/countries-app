import { shallowMount } from "@vue/test-utils";
import CountryCard from "@/components/CountryCard.vue";

describe("CountryCard.vue", () => {
  it("renders country name properly", () => {
    const country = "Italy";
    const wrapper = shallowMount(CountryCard).find(
      '[class="country-card__headline"'
    );
    expect(wrapper.text()).toMatch(country);
  });
});
