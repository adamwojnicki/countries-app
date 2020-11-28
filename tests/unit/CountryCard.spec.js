import { shallowMount } from "@vue/test-utils";
import CountryCard from "@/components/CountryCard.vue";

describe("CountryCard.vue", () => {
  const country = "Italy";
  const wrapper = shallowMount(CountryCard).find(
    '[class="country-card__headline"]'
  );
  it("renders country name properly", () => {
    expect.assertions(1);
    expect(wrapper.text()).toMatch(country);
  });
});
