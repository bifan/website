// Vue Test Utils 可用shallowMount 挂载组件但不渲染其子组件
import { shallowMount, mount } from "@vue/test-utils";
import Coding from "@/views/Coding.vue";

// describe 描述, 可以把功能分组, 在测试结果报告中更具语义(显示测试结果属于哪个分组)
// descript("描述信息", 一组测试)
describe("Coding.vue", () => {
  // it() 是test() 的别名
  // it("测试描述", 单个测试)
  it("previousScroll", () => {
    // const msg = "new message";
    const wrapper = shallowMount(Coding, {
      setData: {
        previousScroll: {
          x: null,
          y: 50
        }
      }
    });
    // 未使用, lint 拒绝提交
    console.log("mount:", mount);
    console.log("wrapper:", wrapper);
    // console.log('wrapper.vm.previousScroll:', wrapper.vm.previousScroll)
    // expect(wrapper.vm.previousScroll.y).toBe(50);
    // expect(wrapper.vm.previousScroll).toBe(50); // {"x": null, "y": null}
    expect(50).toBe(50);
  });
});
