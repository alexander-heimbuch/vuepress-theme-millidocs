<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <main class="layout">
      <div class="inner">
        <Content />
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Sidebar from './Sidebar'
import Preloader from './partials/Preloader'

export default {
  components: { Sidebar, Preloader },
  methods: mapActions([ 'updateSite', 'updatePage' ]),
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
  @import '~milligram-scss';
  @import '~prismjs/themes/prism.css';
  @import './styles/variables';

  html, body, #app {
    margin: 0;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    min-width: $min-width;
  }

  * {
    box-sizing: border-box;
  }

  pre {
    margin-bottom: ($base-height * 2) !important;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: $link-color;
      text-decoration: none;
    }
  }

  .wrapper {
    height: 100%;
    width: 100%;
    max-height: 100%;
    min-height: 100%;
    display: flex;
    overflow: hidden;
  }

  // Content
  .layout {
    display: flex;
    justify-content: center;
    min-height: 100%;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    color: $content-color;
    line-height: 1.7;
    word-wrap: break-word;
  }

  .inner {
    width: 100%;
    max-width: $content-width;
    padding: $base-height ($base-height * 2) ($base-height * 3) $base-height;
  }

  .section {
    margin-bottom: $base-height;
  }

  pre {
    code {
      background: transparent;
    }
  }

  /**
* Mobile
*/
@media (max-width: $mobile-width) {
	.wrapper {
		flex-direction: column;
	}

	.layout {
		width: 100%;
		margin-top: 0;
		height: calc(100% - #{$header-height});
		min-height: calc(100% - #{$header-height});
	}

	.inner {
		padding: $base-height;
	}
}

</style>
