<template>
  <v-app style="min-width: 300px">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/front-end">
          <v-list-item-action>
            <v-icon>mdi-file-tree</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>前端知识体系</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/coding">
          <v-list-item-action>
            <v-icon>mdi-keyboard-settings-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Coding</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dense clipped-left>
      <!-- v-app-bar-nav-icon 会编译出未设置可访问性的按钮  -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="menu button"
      />
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <!-- :src="require(webpFirst('@/assets/img/logo.png'))" -->
        <!-- <template v-if="this.isSupportWebp">
          <v-img
            alt="Logo"
            class="shrink"
            contain
            :src="require('./assets/img/logo.webp')"
            transition="scale-transition"
            width="25"
          />
        </template>
        <template v-else>
          <v-img
            alt="Logo"
            class="shrink"
            contain
            :src="require('./assets/img/logo.png')"
            transition="scale-transition"
            width="25"
          />
        </template> 
        
        :src="require('@/assets/img/logo.webp')" ✔
        :src="require('./assets/img/logo.webp')" ✔

        require('@/assets/img/logo.webp') → img/logo.196f9e10.webp

          :src="useWebP(require('@/assets/img/logo.png'))"
        -->
        <v-img
          alt="Logo"
          class="shrink"
          contain
          src="@/assets/img/logo.png"
          transition="scale-transition"
          width="25"
        />
        <v-img
          alt="Logo"
          class="shrink"
          contain
          :src="require('@/assets/img/logo.webp')"
          transition="scale-transition"
          width="25"
        />
        <v-img
          alt="Logo"
          class="shrink"
          contain
          :src="
            require(isSupportWebp
              ? '@/assets/img/logo.webp'
              : '@/assets/img/logo.png')
          "
          transition="scale-transition"
          width="25"
        />
        <!-- <v-img
          alt="Logo"
          class="shrink"
          contain
          :src="useWebP(require('@/assets/img/logo.png'))"
          transition="scale-transition"
          width="25"
        /> -->
        <!-- <v-img
          alt="Logo"
          class="shrink"
          contain
          :src="require(useWebP('@/assets/img/logo.png'))"
          transition="scale-transition"
          width="25"
        /> -->
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
      <!-- <transition>
        <keep-alive>
        </keep-alive>
      </transition> -->
    </v-content>
    <v-footer
      ><v-spacer></v-spacer>
      <a
        rel="nofollow license noopener noreferrer"
        class="subtitle-2 license"
        href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
        target="_blank"
        >CC BY-SA 4.0</a
      >
      <span class="ml-2 subtitle-2">探索人生, 留下经历</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null,
    // 尝试在cerated 时修改后缀名变量然后拼接
    logoUrl0: "@/assets/img/",
    logoUrl1: "@/assets/img/logo.webp",
    logoUrl2: "./assets/img/logo.webp",
    // logoUrl2222: require("./assets/img/logo.webp"),
    logoUrl22: "logo.webp",
    logoUrl222: "logo.png",
    logoUrl3: "~/assets/img/logo.webp",
    l1: require("@/assets/img/logo.webp"),
    l2: ""
  }),
  created() {
    // var url = '/assets/img/logo.webp';
    // console.log("created-require('')", require("assets/img/logo.webp"));
    // let url = this.useWebP("@/assets/img/logo.webp");
    // var url = 'assets/img/logo.webp';
    // url = '../assets/img/logo.webp';
    // console.log("created-url:", url);
    // console.log("created-require('')", require("@/assets/img/logo.webp"));
    // console.log("created-require(url):", require(url));
    // console.log("created", require(url)); //✔
    // console.log("l1", this.l1);
  },
  mounted() {
    // let url = this.useWebP("@/assets/img/logo.webp");
    // url = "@/assets/img/logo.webp";
    // console.log("mounted", url); //✔
    // console.log("mounted", require(url)); //✔
    // this.l2 = this.useWebP(require("@/assets/img/logo.png"));
  },
  // render() {
  //   console.log("render", require("@/assets/img/logo.webp")); ❌, 在此生命周期不能使用require
  // },
  methods: {
    webpFirst(url) {
      url = this.useWebP(url);
      // this.webpSupported
      console.log("require(url):", require(url));
      url = require(url);
      console.log("this.isSupportWebp:", this.isSupportWebp);
      console.log("useWebP:", this.useWebP);
      console.log("url:", url);
      return url;
    }
  }
};
</script>
