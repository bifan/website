<template>
  <v-container class="cards">
    <v-card width="350" outlined>
      <v-img
        height="200px"
        :src="
          require(isSupportWebp
            ? '@/assets/img/front-end-find-way.webp'
            : '@/assets/img/front-end-find-way.jpg')
        "
        alt=""
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>如何构建体系化的知识</v-card-title>

      <v-card-actions>
        <v-btn
          text
          rel="noreferrer external noopener"
          class="text-capitalize"
          href="https://www.notion.so/a182119c79e248ccb38fa42b7c9b0db1"
          target="_blank"
        >
          Notion 笔记
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card width="350" outlined>
      <v-img
        height="200px"
        :src="
          require(isSupportWebp
            ? '@/assets/img/front-end-road-part.webp'
            : '@/assets/img/front-end-road-part.jpg')
        "
        alt="前端知识体系路线图"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>前端知识体系</v-card-title>

      <v-card-subtitle>专注前端后, 我转用Notion 来整理知识体系</v-card-subtitle>
      <v-card-text>
        比起印象笔记, Notion 的优势:
        <ul>
          <li>无限层级</li>
          <li>原生就是网页可以作为博客</li>
          <li>Dark theme</li>
          <li>对代码较友好</li>
        </ul></v-card-text
      >
      <v-card-actions>
        <v-btn
          text
          rel="noreferrer external noopener"
          class="text-capitalize"
          href="https://www.notion.so/Front-end-road-map-ddebeb0fe67246ad9c32335b02743a92"
          target="_blank"
        >
          Notion 笔记
        </v-btn>
        <v-btn
          text
          rel="noreferrer external noopener"
          class="text-capitalize"
          href="https://roadmap.sh/frontend"
          target="_blank"
        >
          完整版路线图
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card width="350" outlined>
      <v-card-text>📢 Notion 笔记可能需要科学上网姿势哦</v-card-text>
    </v-card>
    <v-card width="350" outlined>
      <v-img
        height="200px"
        :src="
          require(isSupportWebp
            ? '@/assets/img/front-end-souce-code.webp'
            : '@/assets/img/front-end-souce-code.jpg')
        "
        alt=""
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>在源码的边缘试探</v-card-title>

      <v-card-actions>
        <v-btn
          text
          rel="noreferrer external noopener"
          class="text-capitalize"
          href="https://www.notion.so/Front-end-2ebcd91f47a14efc9b2b578062d12f55"
          target="_blank"
        >
          Notion 笔记
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card width="350" outlined>
      <v-img
        height="150px"
        :src="
          require(isSupportWebp
            ? '@/assets/img/front-end-interview.webp'
            : '@/assets/img/front-end-interview.jpg')
        "
        alt=""
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
      <v-card-title>由面试题带出知识点</v-card-title>

      <v-card-actions>
        <v-btn
          text
          rel="noreferrer external noopener"
          class="text-capitalize"
          href="https://www.notion.so/Front-end-47c40418f6e148f3a00d7444eeaf2ef1"
          target="_blank"
        >
          Notion 笔记
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Masonry from "masonry-layout";

export default {
  name: "Front-end",
  methods: {
    doMasonryLayout() {
      new Masonry(".cards", {
        itemSelector: ".cards>div",
        gutter: 10,
        fitWidth: true
      });
    }
  },
  mounted() {
    this.doMasonryLayout();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      window.scrollTo(vm.previousScroll.x, vm.previousScroll.y);
    });
  },
  data() {
    return {
      previousScroll: {
        x: null,
        y: null
      }
    };
  },
  activated() {
    this.doMasonryLayout();
  },
  beforeRouteLeave(to, from, next) {
    this.previousScroll.x = window.scrollX;
    this.previousScroll.y = window.scrollY;
    next();
  }
};
</script>
