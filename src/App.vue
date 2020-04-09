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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" /><v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="25"
        />
      </div>
    </v-app-bar>
    <v-content
      ><transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-content>
    <v-footer
      ><v-spacer></v-spacer>
      <a
        class="subtitle-2"
        style="text-decoration: none;"
        href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"
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
    drawer: null
  })
};
</script>
