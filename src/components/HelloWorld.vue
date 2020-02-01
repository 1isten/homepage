<template>
  <v-container class="fill-height">
    <v-layout justify-center align-center column wrap>
      <v-flex shrink class="mb-2">
        <div
          v-resize="onResize"
          :style="avatarContainerStyle"
        >
          <v-img
            :src="require('@/assets/280544@1563729391.png')"
            :lazy-src="require('@/assets/280544@1563729391-lazy.png')"
            :height="'100%'"
            :style="avatarStyle"
          ></v-img>
        </div>
      </v-flex>

      <v-flex shrink>
        <h1 class="display-2 font-weight-bold mt-1 mb-2">
          {{ msg }}
        </h1>
        <p class="mb-1">{{ bio }}</p>
        <p class="subheading font-weight-regular">
          <v-tooltip bottom disabled>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-1" small icon v-on="on" href="https://1isten.github.io/notes" target="_self">
                <v-icon :size="iconSize">{{ mdiFileDocumentEditOutline }}</v-icon>
              </v-btn>
            </template>
            <span>My notes</span>
          </v-tooltip>
          <v-tooltip bottom disabled>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-1" small icon v-on="on" href="https://github.com/1isten" target="_blank">
                <v-icon :size="iconSize">{{ mdiGithubCircle }}</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip>
          <v-tooltip bottom disabled>
            <template v-slot:activator="{ on }">
              <v-btn class="ma-1" small icon v-on="on" href="https://twitter.com/1is10" target="_blank">
                <v-icon :size="iconSize">{{ mdiTwitter }}</v-icon>
              </v-btn>
            </template>
            <span>Twitter</span>
          </v-tooltip>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mdiFileDocumentEditOutline, mdiGithubCircle, mdiTwitter } from '@mdi/js';

export default {
  name: 'HelloWorld',
  data: () => ({
    delta: 200,

    msg: 'Hello World',
    bio: "My name is Sten Li, I'm a programmer.",

    mdiFileDocumentEditOutline,
    mdiGithubCircle,
    mdiTwitter,
  }),
  computed: {
    avatarContainerStyle() {
      return `
        width: ${this.delta}px;
        height: ${this.delta}px;
        border-radius: 50%;
        overflow: hidden;
      `;
    },
    avatarStyle() {
      return this.avatarContainerStyle;
    },
    iconSize() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 20;
      }
      if (this.$vuetify.breakpoint.smOnly) {
        return 22;
      }
      return 24;
    },
  },
  methods: {
    onResize() {
      const pa = 12 * 2;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const min = vw < vh ? vw : vh;
      const max = 100;
      let delta = max;
      if (min < max + pa) {
        delta = min - pa;
      }
      const final = delta + 0.06 * vw + 0.04 * vh;
      this.delta = final < 200 ? final : 200;
    }
  },
};
</script>
