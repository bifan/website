module.exports = {
  preset: "@vue/cli-plugin-unit-jest"
};

/*
对脚手架的功能增删, 可以通过vue 命令控制
vue add unit-jest
  单元测试
  添加unit-jest 会自动创建
    /tests/unit/example.spec.js
    jest.config.js

vue add e2e-nightwatch
  e2e end to end 端到端测试, 模拟用户操作, 从页面到访问访问服务器到响应渲染完毕
  执行npm run test:e2e
    运行开发服务器
    打开浏览器测试(页面上还会显示, 浏览器正被自动控制)
    自动关闭浏览器
    控制台打印测试结果
*/

// Snapshot Tests, 快照测试, 保存上一次页面的内容, 与新的页面比较不同
// 测试结果会展示不同的部分
