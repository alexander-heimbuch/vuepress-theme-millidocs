<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <main class="layout">
      <div class="inner">
        <router-link :to="$withBase('/')">
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19.282 4.494c-.481-.957-1.242-1.558-2.19-1.489-1.006.082-1.843.869-2.08 1.958-.06.27.111.537.381.595.271.057.537-.112.596-.381.166-.759.715-1.137 1.186-1.175.518-.051.91.287 1.179.86.795 1.694 3.319 6.902 4.259 9.186 0 0-1.212-3.049-4.616-3.049-2.366 0-4.338 1.648-4.856 3.857-.36-.261-.779-.393-1.169-.393-.381 0-.776.121-1.118.36-.534-2.191-2.495-3.823-4.849-3.823-3.404 0-4.616 3.049-4.616 3.049.939-2.284 3.464-7.492 4.259-9.186.269-.573.661-.911 1.179-.86.471.038 1.02.417 1.186 1.175.057.269.323.438.594.381.27-.059.44-.325.381-.595-.237-1.089-1.074-1.876-2.08-1.958-.948-.069-1.709.531-2.19 1.488-.989 1.964-4.718 9.585-4.718 10.485 0 .513.4 1.021 1.005 1.021 0 2.762 2.238 5 5 5 2.047 0 3.792-1.235 4.56-2.999.514-1.183.311-2.537 1.405-2.537 1.124 0 .968 1.39 1.469 2.54.767 1.762 2.51 2.996 4.556 2.996 2.762 0 5-2.238 5-5 .605 0 1.005-.508 1.005-1.021 0-.9-3.729-8.521-4.718-10.485zm-13.277 15.506c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm11.99 0c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm-.995-6.939c.198-.036.401-.061.609-.061 1.872 0 3.391 1.518 3.391 3.39l-.028.283c-.762-1.692-2.201-3.01-3.972-3.612zm-13.972 3.612l-.028-.283c0-1.872 1.519-3.39 3.391-3.39.208 0 .411.025.609.061-1.771.602-3.21 1.92-3.972 3.612z"/>
          </svg>
          <h4>Nothing found</h4>
        </router-link>
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

<style lang="scss" scoped>
  @import '~milligram-scss';
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
    display: flex;
    width: 100%;
    max-width: $content-width;
    padding: $base-height ($base-height * 2) ($base-height * 3) $base-height;
    justify-content: center;
    align-items: center;

    a {
      display: block;
      text-align: center
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
