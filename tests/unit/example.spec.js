// Vue Test Utils 可用shallowMount 挂载组件但不渲染其子组件

// import { shallowMount, mount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
// test/setup.js

import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import Coding from "@/views/Coding.vue";

// describe 描述, 可以把功能分组, 在测试结果报告中更具语义(显示测试结果属于哪个分组)
// descript("描述信息", 一组测试)
describe.skip("页面 → Coding.vue", () => {
  // it() 是test() 的别名
  // it("测试描述", 单个测试)
  // Inspect the raw component options
  // it("存在data", () => {
  //   expect(typeof Coding.data).toBe("function");
  // });
  const wrapper = mount(Coding, {
    // ! 在mount 中设置data 要设置sync: false
    // ! 使用setData, 要在异步中才能正确获取到
    // wrapper.setData({ foo: "bar" });
    // expect(wrapper.vm.foo).toBe("bar");
    // setTimeout(() => {
    //   expect(wrapper.vm.foo).toBe("bar");
    //   //wrapper.vm.selectedDate.should.be.equal(testDate);
    //   done();
    // });
    sync: false,
    data: function() {
      return {
        previousScroll: {
          x: null,
          y: 50
        },
        test: 11
      };
    }
  });

  // it("is a Vue instance", () => {
  //   expect(wrapper.isVueInstance()).toBeTruthy();
  // });
  it.skip("测试滚动位置", () => {
    // const msg = "new message";
    // console.log("❗ → Coding:", Coding);

    expect(wrapper.vm.test).toBe(11);
    console.log("❗ → wrapper.vm.test:", wrapper.vm.test);
    // wrapper.setData({
    //   previousScroll: {
    //     x: null,
    //     y: 50
    //   },
    //   test: 11
    // });
    // 未使用, lint 拒绝提交
    // console.log("mount:", mount);
    // console.log("wrapper:", wrapper);
    // console.log("wrapper.vm.previousScroll.y:", wrapper.vm.previousScroll.y);
    // expect(wrapper.vm.previousScroll.y).toBe(50);
    // expect(wrapper.vm.previousScroll).toBe(50); // {"x": null, "y": null}

    // wrapper.find('input[type="radio"]')
    // expect(wrapper.text()).toBe('bar')
    // expect(wrapper.contains('p')).toBe(true)

    // const main = wrapper.find("main");
    // expect(main.is("main")).toBe(true);

    // expect(50).toBe(50);
  });
});
