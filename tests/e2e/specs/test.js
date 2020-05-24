// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".v-card__title")
      .end();
  }
  /*,
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.elementPresent(".hello")
      .assert.containsText("h1", "Welcome to Your Vue.js App")
      .assert.elementCount("img", 1)
      .end();
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent(".hello")
      .end();
  }
  */
};

/* 端到端测试功能的目录结构

tests/e2e/
  ├── custom-assertions/
  |   └── elementCount.js
  ├── custom-commands/
  |   ├── customExecute.js
  |   ├── openHomepage.js
  |   └── openHomepageClass.js
  ├── page-objects/
  |   └── homepage.js
  ├── specs/                       → 入口
  |   ├── test.js
  |   └── test-with-pageobjects.js
  └── globals.js

*/
