// 仅测试当前用例:
// npm run test:unit -- scroll-save.spec.js

import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import Coding from "@/views/Coding.vue";

describe("页面 → Coding.vue", () => {
  test("测试滚动位置", () => {
    const wrapper = shallowMount(Coding, {
      data: function() {
        return {
          previousScroll: {
            x: null,
            y: 50
          }
        };
      }
    });
    wrapper.setData({
      previousScroll: {
        y: 52
      }
    });
    expect(wrapper.vm.previousScroll.y).toBe(52);
  });
});
