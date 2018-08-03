import { shallowMount } from '@vue/test-utils';
import DrugSupplementList from '@/components/DrugSupplementList.vue';

describe('DrugSupplementList.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DrugSupplementList, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
