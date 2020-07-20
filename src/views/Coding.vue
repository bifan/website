<template>
  <v-container>
    <div class="cards">
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-delicious.webp'
              : '@/assets/img/coding-delicious.jpg')
          "
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
            GitHub
          </v-btn>
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://codepen.io/bifan/pens/public"
            target="_blank"
          >
            CodePen
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
            在线写代码的好地方
          </v-btn></v-card-actions
        >
      </v-card>

      <v-card width="350" outlined>
        <v-card-text>📢 Notion 笔记可能需要科学上网姿势哦</v-card-text>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/entrance-curricula.webp'
              : '@/assets/img/entrance-curricula.jpg')
          "
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

        <v-card-text
          >Vue.js 系技术栈项目, 可以定制学习计划并记录进度</v-card-text
        >
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
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/entrance-website-v1.webp'
              : '@/assets/img/entrance-website-v1.jpg')
          "
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
      <v-card width="350" outlined>
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
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-order-movies.webp'
              : '@/assets/img/coding-order-movies.jpg')
          "
          alt="吉卜力工作室动画列表排序"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>吉卜力工作室动画列表排序</v-card-title>

        <v-card-text>数据源: https://jikan.moe/</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/页面内容排序/"
            target="_blank"
            >在线浏览</v-btn
          >
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://github.com/bifan/front-end-point/tree/master/综合应用/页面内容排序/"
            target="_blank"
            >GitHub 地址</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-event-bubble.webp'
              : '@/assets/img/coding-event-bubble.jpg')
          "
          alt="事件冒泡机制"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>事件冒泡机制和节流</v-card-title>

        <v-card-text>冒泡过程中鼠标会变为繁忙状态</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/事件/event.html"
            target="_blank"
            >在线浏览</v-btn
          >
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://github.com/bifan/front-end-point/tree/master/综合应用/事件/"
            target="_blank"
            >GitHub 地址</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-flex-demo.webp'
              : '@/assets/img/coding-flex-demo.jpg')
          "
          alt="CSS flex 示例"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>Flex 示例</v-card-title>

        <v-card-text>鼠标滑过时显示代码</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/css-flex/flex.html"
            target="_blank"
            >在线浏览</v-btn
          >
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://github.com/bifan/front-end-point/tree/master/综合应用/css-flex/"
            target="_blank"
            >GitHub 地址</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-grid-responsive.webp'
              : '@/assets/img/coding-grid-responsive.jpg')
          "
          alt="Grid 响应式布局"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>Grid 响应式布局</v-card-title>

        <v-card-text>需要手动调整视口大小来测试</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/响应式布局/响应式布局.html"
            target="_blank"
            >在线浏览</v-btn
          >
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://github.com/bifan/front-end-point/tree/master/综合应用/响应式布局/"
            target="_blank"
            >GitHub 地址</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-nth-by-js.webp'
              : '@/assets/img/coding-nth-by-js.jpg')
          "
          alt="模拟CSS nth-child"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>JS 模拟CSS nth-child() 选择器</v-card-title>

        <v-card-text>为了深刻了解2n+1 是什么意思 (●'◡'●)</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/模拟CSS-nth-child-选择器/"
            target="_blank"
            >在线浏览</v-btn
          >
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://github.com/bifan/front-end-point/tree/master/综合应用/模拟CSS-nth-child-选择器/"
            target="_blank"
            >GitHub 地址</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-lighthouse-test.webp'
              : '@/assets/img/coding-lighthouse-test.jpg')
          "
          alt="lighthouse 跑分测试"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>bifan.io → lighthouse 跑分测试</v-card-title>

        <v-card-text
          >实践的过程中可以对知识点有个主次的梳理. 再进一步的提升就要依赖SSR
          和CDN 了😄</v-card-text
        >
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://www.notion.so/lighthouse-516237715e4f42b581b2c4a509e86cee"
            target="_blank"
            >Notion 笔记</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-no-console.webp'
              : '@/assets/img/coding-no-console.jpg')
          "
          alt="检测浏览器控制台是否打开"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>检测浏览器控制台是否打开</v-card-title>

        <v-card-text>前端之间友好的交♂互🤭</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/浏览器控制台/禁止用户打开控制台.html"
            target="_blank"
            >在线浏览</v-btn
          >
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://www.notion.so/0fced3060152417ba85e85fd3a97cee7"
            target="_blank"
            >Notion 笔记</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          :src="
            require(isSupportWebp
              ? '@/assets/img/coding-breathing-mask-dance.webp'
              : '@/assets/img/coding-breathing-mask-dance.jpg')
          "
          alt="检测浏览器控制台是否打开"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>口罩飞舞</v-card-title>

        <v-card-text>simplex 算法产生移动路径</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/综合应用/口罩飞舞/"
            target="_blank"
            >在线浏览</v-btn
          >
        </v-card-actions>
      </v-card>
      <v-card width="350" outlined>
        <v-img
          height="200px"
          src="@/assets/img/coding-rock-three.gif"
          alt="CSS 动画"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
        <v-card-title>CSS Animation</v-card-title>

        <v-card-text>三人组摇晃</v-card-text>
        <v-card-actions class="cart-btns">
          <v-btn
            rel="noreferrer external noopener"
            text
            class="text-capitalize"
            href="https://bifan.io/front-end-point/CSS/动画/demo-3d-1.html"
            target="_blank"
            >在线浏览</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Masonry from "masonry-layout";

export default {
  name: "Coding",
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
  // 计算Masonry 样式
  // 恢复滚动位置
  beforeRouteEnter(to, from, next) {
    // 此时组件实例还没有产生
    next(vm => {
      // 组件实例产生后传入进来, 用vm 来代替this 操作当前组件
      window.scrollTo(vm.previousScroll.x, vm.previousScroll.y);
    });
  },

  // 缓存滚动位置
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
  // 记录滚动位置
  beforeRouteLeave(to, from, next) {
    this.previousScroll.x = window.scrollX;
    this.previousScroll.y = window.scrollY;
    next();
  }
};
</script>
