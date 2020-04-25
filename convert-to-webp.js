const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  // await imagemin(["./src/assets/img/*.{jpg,png}"], "./src/assets/webp/", {
  //   use: [imageminWebp({ quality: 75 })]
  // }).then(() => {
  //   console.log("Done!");
  // });
  const files = await imagemin(["src/assets/img/*.{jpg,png}"], {
    destination: "src/assets/img/",
    plugins: [
      imageminWebp({
        quality: 75
      })
    ]
  });

  console.log(files);
})();
