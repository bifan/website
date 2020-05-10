<template>
  <v-app style="min-width: 300px">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>{{ icons.mdiHome }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/front-end">
          <v-list-item-action>
            <v-icon>{{ icons.mdiFileTree }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>前端知识体系</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/coding">
          <v-list-item-action>
            <v-icon>{{ icons.mdiKeyboardSettingsOutline }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Coding</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dense clipped-left>
      <!-- v-app-bar-nav-icon 会编译出的按钮未设置可访问性 -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="menu button"
      />
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
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
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
      <!-- <transition> →  出现/消失 有个渐隐/渐显 动画 -->
      <!-- <keep-alive> → 缓存而不销毁(但是对于masonry-layout 不友好, 会触发masonry 重新计算元素) -->
      <!-- <transition>
        <keep-alive> </keep-alive>
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
import { mdiHome, mdiFileTree, mdiKeyboardSettingsOutline } from "@mdi/js";
export default {
  name: "App",

  data: () => ({
    drawer: null,
    icons: {
      mdiHome,
      mdiFileTree,
      mdiKeyboardSettingsOutline
    }
  })
};
</script>
