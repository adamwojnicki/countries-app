import { shallowMount } from "@vue/test-utils";
import CountryCard from "@/components/CountryCard.vue";

describe("CountryCard.vue", () => {
  const country = {
    name: "Italy",
    population: 1234556,
    capital: "Rome",
    flag: "https://restcountries.eu/data/ita.svg"
  };
  const wrapper = shallowMount(CountryCard, {
    propsData: { country }
  });

  it("renders country name and flag properly", () => {
    expect.assertions(2);
    expect(wrapper.find('[class="country-card__headline"]').text()).toBe(
      country.name
    );
    expect(wrapper.find("img").html()).toContain(country.flag);
  });
});
