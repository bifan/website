<template>
  <v-container class="cards">
    <v-card width="350">
      <v-img
        height="200px"
        src="@/assets/img/coding-delicious.jpg"
        alt="朝气蓬勃"
      >
        <v-card-title>敲代码咯</v-card-title>

        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-actions class="pb-0">
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://github.com/bifan"
          target="_blank"
        >
          GitHub 管理代码
        </v-btn>
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://codepen.io/bifan/pens/public"
          target="_blank"
        >
          CodePen 在线写代码
        </v-btn></v-card-actions
      >
      <v-card-actions class="pt-0">
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://www.notion.so/6803fe8e6a2e445bb3d6f05b2fb1592b"
          target="_blank"
        >
          我发现的其它在线写代码的好地方
        </v-btn></v-card-actions
      >
    </v-card>

    <v-card width="350">
      <v-card-text>📢 Notion 笔记可能需要科学上网姿势哦</v-card-text>
    </v-card>
    <v-card width="350">
      <v-img
        height="200px"
        src="@/assets/img/entrance-curricula.jpg"
        alt="学程 Curricula 项目"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>学程 Curricula</v-card-title>

      <v-card-text>Vue.js 系技术栈项目, 可以定制学习计划并记录进度</v-card-text>
      <v-card-actions class="cart-btns">
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://bifan.io/curricula/"
          target="_blank"
          >在线浏览</v-btn
        >
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://www.notion.so/55fac938a2bf40b09a05d2e6511c034c"
          target="_blank"
          >Notion 笔记</v-btn
        >
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://github.com/bifan/curricula"
          target="_blank"
          >GitHub 地址</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card width="350">
      <v-img
        height="200px"
        src="@/assets/img/entrance-website-v1.jpg"
        alt="个人网站"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>个人网站</v-card-title>

      <v-card-text>
        就是当前看到的网站啦, 图中是第一版的截图<br />个人网站的搭建可以对Web
        安全, 自动部署什么的有所实践</v-card-text
      >
      <v-card-actions class="cart-btns">
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://www.notion.so/0aec95e3cc834e48ae1d2022116581e9"
          target="_blank"
          >Notion 笔记</v-btn
        >
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://github.com/bifan/website"
          target="_blank"
          >GitHub 地址</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card width="350">
      <v-img
        height="200px"
        src="https://bifan.io/ie/img/aizawa-inori-landscape.jpg"
        alt="bifan.io 不支持IE 浏览器"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>拒绝IE</v-card-title>

      <v-card-text
        >本站对于IE 浏览器的请求只会返回"拒绝IE"页面的内容</v-card-text
      >
      <v-card-actions class="cart-btns">
        <v-btn
          rel="noreferrer external noopener"
          text
          class="text-capitalize"
          href="https://bifan.io/ie/reject-ie.html"
          target="_blank"
          >查看此内容</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Masonry from "masonry-layout";

export default {
  mounted() {
    new Masonry(".cards", {
      itemSelector: ".cards>div",
      gutter: 10
    });
  }
};
</script>
