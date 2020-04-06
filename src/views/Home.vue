<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-card>
          <v-img
            src="@/assets/img/coding-at-home.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            alt="Coding at home"
          >
            <v-card-title class="🌈-underline"
              ><span>Coding at home</span></v-card-title
            >
          </v-img>
          <v-chip class="ma-2" color="rgba(0,0,0,0)" label>
            <v-icon left>mdi-label</v-icon>
            升降桌
          </v-chip>
          <v-chip class="ma-2" color="rgba(0,0,0,0)" label>
            <v-icon left>mdi-label</v-icon>
            不够用的屏幕
          </v-chip>
          <v-chip class="ma-2" color="rgba(0,0,0,0)" label>
            <v-icon left>mdi-label</v-icon>
            很凶的熊
          </v-chip>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="#1f7087">
          <div class="d-flex flex-wrap">
            <v-avatar class="ma-3" size="125">
              <v-img src="@/assets/img/me.jpg"></v-img>
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
          <v-btn-toggle group borderless>
            <v-btn href="https://github.com/bifan" target="_blank">
              <v-icon>mdi-github</v-icon>
            </v-btn>

            <v-btn href="https://codepen.io/bifan/pens/public" target="_blank">
              <v-icon>mdi-codepen</v-icon>
            </v-btn>

            <v-btn href="mailto:mail@bifan.io" target="_blank">
              <v-icon>mdi-email</v-icon>
            </v-btn>

            <v-btn href="https://space.bilibili.com/32810223" target="_blank">
              <v-icon>mdi-alpha-b-circle</v-icon>
            </v-btn>
            <v-btn
              href="http://steamcommunity.com/profiles/76561198127174440/"
              target="_blank"
            >
              <v-icon>mdi-steam</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {}
};
</script>
