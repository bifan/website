<template>
  <v-container class="d-flex flex-wrap cards justify-center">
    <v-card width="350">
      <v-img
        height="200px"
        src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F831a042d-f940-4314-a0ec-21185f13728a%2Fmeiwei.png?table=block&id=08fa30a9-2008-44e5-bd03-5034bf047059&width=2160&cache=v2"
        alt="朝气蓬勃"
      >
      </v-img>
      <v-card-title>撸的越多码越多</v-card-title>

      <v-card-subtitle class="pb-0">好像没什么不对</v-card-subtitle>
      <v-card-actions>
        <v-btn
          color="#ED553B"
          href="https://www.notion.so/Coding-4101a58df0244f2aace8c87527cb9dc0"
          target="_blank"
        >
          Coding 笔记
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="350">
      <!-- <v-img
        height="200px"
        src=""
        alt=""
      >
      </v-img> -->
      <v-card-title>代码在哪里</v-card-title>

      <v-card-text class="pb-0"
        ><v-btn
          href="https://github.com/bifan"
          target="_blank"
          text
          class="text-capitalize"
        >
          GitHub/bifan
        </v-btn></v-card-text
      >
      <v-card-text
        ><v-btn
          href="https://codepen.io/bifan/pens/public"
          target="_blank"
          text
          class="text-capitalize"
        >
          CodePen/bifan
        </v-btn></v-card-text
      >
      <v-card-text class="pb-0"
        ><v-btn
          href="https://www.notion.so/6803fe8e6a2e445bb3d6f05b2fb1592b"
          target="_blank"
          text
        >
          笔记 - 在线写代码的好地方
        </v-btn></v-card-text
      >
    </v-card>

    <v-card width="350">
      <v-img height="200px" src="" alt=""> </v-img>
      <v-card-title>学程 Curricula</v-card-title>

      <v-card-subtitle class="pb-0">Vue.js 系技术栈项目</v-card-subtitle>
      <v-card-actions>
        <v-btn
          color="#ED553B"
          href="https://bifan.io/curricula/"
          target="_blank"
          >在线浏览</v-btn
        >
        <v-btn
          color="#ED553B"
          href="https://www.notion.so/55fac938a2bf40b09a05d2e6511c034c"
          target="_blank"
          >进入笔记</v-btn
        >
        <v-btn
          color="#ED553B"
          href="https://github.com/bifan/curricula"
          target="_blank"
          >GitHub 地址</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-card width="350">
      <v-img height="200px" src="" alt=""> </v-img>
      <v-card-title>个人网站</v-card-title>

      <v-card-subtitle class="pb-0">就是当前看到的网站啦</v-card-subtitle>
      <v-card-actions>
        <v-btn
          color="#ED553B"
          href="https://www.notion.so/2ec2e7c2ba084ae6bec767b07aed9b7e"
          target="_blank"
          >进入笔记</v-btn
        >
        <v-btn
          color="#ED553B"
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
      </v-img>
      <v-card-title>拒绝IE</v-card-title>

      <v-card-text class="pb-0"
        >本站对IE 浏览器的所有请求只会返回同一内容.
        在服务端判断并重写内容</v-card-text
      >
      <v-card-actions>
        <v-btn
          color="#ED553B"
          href="https://bifan.io/ie/reject-ie.html"
          target="_blank"
          >查看此内容</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>
