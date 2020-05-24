////////////////////////////////////////////////////////////////
// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide
//
// For more information on working with page objects see:
//   https://nightwatchjs.org/guide/working-with-page-objects/
////////////////////////////////////////////////////////////////

module.exports = {
  beforeEach: browser => browser.init(),

  "e2e tests using page objects": browser => {
    const homepage = browser.page.homepage();
    homepage.waitForElementVisible("@appContainer");

    const app = homepage.section.app;
    app.assert.elementCount("header .v-image", 1);
    app.expect.section("main div.v-card__title").to.be.visible;
    app.expect.section("footer span.subtitle-2").text.to.match(/探索人生/);

    browser.end();
  }
  /*,

  'verify if string "e2e-nightwatch" is within the cli plugin links': browser => {
    const homepage = browser.page.homepage();
    const welcomeSection = homepage.section.app.section.welcome;

    welcomeSection.expect
      .element("@cliPluginLinks")
      .text.to.contain("e2e-nightwatch");
  }*/
};
