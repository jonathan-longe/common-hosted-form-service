import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import Admin from '@/views/Admin.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Admin.vue', () => {
  let store;

  beforeEach(() => {
    store = new Vuex.Store();
  });

  it('renders without error', async () => {
    store.registerModule('admin', { namespaced: true });

    const wrapper = shallowMount(Admin, {
      localVue,
      store,
      stubs: ['BaseSecure', 'router-view']
    });
    await localVue.nextTick();

    expect(wrapper.html()).toMatch('router-view');
  });
});
