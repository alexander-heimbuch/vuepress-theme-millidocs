<template>
  <component :is="layout"></component>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Default from './Default'
import Empty from './Empty'

export default {
  components: { Default, Empty },
  methods: mapActions([ 'updateSite', 'updatePage' ]),
  computed: mapGetters([ 'layout' ]),
  watch: {
    $page() {
      this.updatePage(this.$page)
    }
  },
  mounted() {
    this.updatePage(this.$page)
    this.updateSite(this.$site)
  }
}
</script>

<style lang="scss">
  @import './styles/variables';
  @import '~milligram-scss/src/Color';
  // Base
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  // Set box-sizing globally to handle padding and border widths
  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  // The base font-size is set at 62.5% for having the convenience
  // of sizing rems in a way that is similar to using px: 1.6rem = 16px
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  // Default body styles
  body {
    color: $color-secondary;
    font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.6em; // Currently ems cause chrome bug misinterpreting rems on body element
    font-weight: 300;
    letter-spacing: .01em;
    line-height: 1.6;
  }


  html, body, #app {
    margin: 0;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    min-width: $min-width;
  }
</style>
