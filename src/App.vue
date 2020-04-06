<template>
  <v-app>
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
    <!-- collapse collapse-on-scroll fixed dense hide-on-scroll  -->
    <v-app-bar app dense clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="25"
        />
      </div>
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques"
      class="overflow-y-auto"
      max-height="100vh"
    >
    </v-sheet> -->
    <v-content
      ><transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-content>
    <v-footer
      ><span class="font-weight-thin">探索人生, 留下经历</span>
      <a
        class="ml-2 font-weight-medium"
        style="text-decoration: none; color: #666"
        href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
        >CC BY-SA 4.0</a
      >
      <!-- <span>
        <a
          rel="nofollow license noopener noreferrer"
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
          target="_blank"
          translate="no"
          class="notranslate"
          >CC BY-SA 4.0</a
        ></span
      > -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: null
  })
};
</script>
