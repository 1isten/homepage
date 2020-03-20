<template>
  <div>
    <v-tooltip v-for="(link, i) in links" :key="i" bottom disabled>
      <template v-slot:activator="{ on }">
        <v-btn
          :href="link.href"
          :target="link.target"
          :small="$vuetify.breakpoint.smAndDown"
          icon
          style="margin: 0 0.5ch;"
          v-on="on"
        >
          <v-icon :size="iconSize">
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ link.text }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import { mdiFileDocumentEditOutline, mdiGithub, mdiTwitter } from '@mdi/js';

export default {
  name: 'ExternalLinks',
  data: () => ({
    links: [
      {
        href: 'https://1isten.github.io/notes',
        target: '_self',
        icon: mdiFileDocumentEditOutline,
        text: 'Notes',
      },
      {
        href: 'https://github.com/1isten',
        target: '_blank',
        icon: mdiGithub,
        text: 'GitHub',
      },
      {
        href: 'https://twitter.com/1is10',
        target: '_blank',
        icon: mdiTwitter,
        text: 'Twitter',
      },
    ],
  }),
  computed: {
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
};
</script>
