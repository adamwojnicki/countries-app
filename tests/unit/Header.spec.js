import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  const title = "Country App";
  const wrapper = shallowMount(Header).find('[class="header__brand"]');
  it("renders title properly", () => {
    expect.assertions(1);
    expect(wrapper.text()).toMatch(title);
  });
});
