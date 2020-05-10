<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card outlined>
          <v-img
            :src="
              require(isSupportWebp
                ? '@/assets/img/coding-at-home.webp'
                : '@/assets/img/coding-at-home.jpg')
            "
            class="white--text align-end"
            min-height="200px"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            alt="Coding at home"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
            <v-card-title class="🌈-underline"
              ><span>Coding at home</span></v-card-title
            >
          </v-img>
          <v-chip class="ma-2" color="rgba(0,0,0,0)" label>
            <v-icon left>{{ icons.mdiLabel }}</v-icon>
            升降桌
          </v-chip>
          <v-chip class="ma-2" color="rgba(0,0,0,0)" label>
            <v-icon left>{{ icons.mdiLabel }}</v-icon>
            不够用的屏幕
          </v-chip>
          <v-chip class="ma-2" color="rgba(0,0,0,0)" label>
            <v-icon left>{{ icons.mdiLabel }}</v-icon>
            很凶的熊
          </v-chip>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="#1f7087" outlined>
          <div class="d-flex flex-wrap">
            <v-avatar class="ma-3" size="125">
              <v-img
                :src="
                  require(isSupportWebp
                    ? '@/assets/img/me.webp'
                    : '@/assets/img/me.jpg')
                "
                alt="头像"
              ></v-img>
            </v-avatar>
            <div>
              <v-card-title>Hello, 我是毕凡</v-card-title>
              <v-card-text>
                <div>一只<s>肥宅</s>程序员, 山东大汉</div>
                <div>
                  <!-- 在<v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <span v-on="on">SSH2</span>
                    </template>
                    <span>Struts2 + Spring + Hibernate</span>
                  </v-tooltip>
                  还流行的时候 -->作为Java 程序员入行Web 开发
                </div>
                <div>现在专注Web 前端领域</div>
              </v-card-text>
            </div>
          </div>
          <div class="ml-2">
            <v-btn
              rel="noreferrer external noopener"
              class="mr-1 mb-1"
              href="https://github.com/bifan"
              icon
              target="_blank"
              aria-label="外链到GitHub"
            >
              <v-icon>{{ icons.mdiGithub }}</v-icon>
            </v-btn>

            <v-btn
              rel="noreferrer external noopener"
              class="mr-1 mb-1"
              href="https://codepen.io/bifan/pens/public"
              icon
              target="_blank"
              aria-label="外链到Codepen"
            >
              <v-icon>{{ icons.mdiCodepen }}</v-icon>
            </v-btn>

            <v-btn
              rel="noreferrer external noopener"
              class="mr-1 mb-1"
              href="mailto:mail@bifan.io"
              icon
              target="_blank"
              aria-label="邮箱地址"
            >
              <v-icon>{{ icons.mdiEmail }}</v-icon>
            </v-btn>

            <v-btn
              rel="noreferrer external noopener"
              class="mr-1 mb-1"
              href="https://space.bilibili.com/32810223"
              icon
              target="_blank"
              aria-label="外链到B站"
            >
              <v-icon>{{ icons.mdiAlphaBCircle }}</v-icon>
            </v-btn>
            <v-btn
              rel="noreferrer external noopener"
              class="mr-1 mb-1"
              href="http://steamcommunity.com/profiles/76561198127174440/"
              icon
              target="_blank"
              aria-label="外链到Steam"
            >
              <v-icon>{{ icons.mdiSteam }}</v-icon>
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {
  mdiLabel,
  mdiGithub,
  mdiCodepen,
  mdiEmail,
  mdiAlphaBCircle,
  mdiSteam
} from "@mdi/js";
export default {
  name: "Home",
  data: () => ({
    drawer: null,
    icons: {
      mdiLabel,
      mdiGithub,
      mdiCodepen,
      mdiEmail,
      mdiAlphaBCircle,
      mdiSteam
    },
    previousScroll: {
      x: null,
      y: null
    }
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      window.scrollTo(vm.previousScroll.x, vm.previousScroll.y);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.previousScroll.x = window.scrollX;
    this.previousScroll.y = window.scrollY;
    next();
  }
};
</script>
