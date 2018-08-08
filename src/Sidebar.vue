<template>
  <div class="sidebar" :class="{ opened: sidebarOpen }">
    <div class="sidebar-mobile">
      <button class="button button-clear" @click="toggleSidebar()">
        <img v-if="sidebarOpen" :src="closeIcon" class="icon"/>
        <img v-else :src="menuIcon" class="icon">
      </button>
    </div>

    <search></search>
    <div class="sidebar-main">
      <navigation></navigation>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { capitalize } from 'lodash'

import Search from './partials/Search'
import Navigation from './partials/Navigation'

import closeIcon from './static/images/close.svg'
import menuIcon from './static/images/menu.svg'

export default {
  components: { Search, Navigation },
  data() {
    return {
      closeIcon,
      menuIcon
    }
  },
  computed: mapGetters(['blog', 'navigation', 'current', 'sidebarOpen']),
  methods: {
    capitalize,
    ...mapActions(['toggleSidebar'])
  }
}
</script>

<style lang="scss">
  @import './styles/variables';

  // Sidebar
  .sidebar {
    position: relative;
    display: block;
    width: 20%;
    max-width: $sidebar-width;
    padding: 0;
    border-right: $sidebar-border;
    height: 100%;
    overflow: hidden;
    color: $sidebar-color;

    .sidebar-main {
      height: 100%;
      background: $navigation-background;
      padding: $base-height;
    }

    .sidebar-mobile {
      display: none;
      height: $header-height;
      padding: $base-height 0;

      .menu-button {
        padding: 0 $base-height;
      }

      .icon {
        width: 18px;
        cursor: pointer;
        height: auto;
        display: none;
      }
    }
  }

  /**
  * Mobile
  */
  @media (max-width: $mobile-width) {
    .wrapper {
      flex-direction: column;
    }

    .sidebar {
      width: 100%;
      max-width: 100%;
      border-right: none;
      height: $header-height;

      .sidebar-mobile {
        display: flex;
        justify-content: flex-end;

        .icon {
          display: inline;
        }
      }

      &.opened {
        overflow: visible;
        height: auto;
        border-bottom: $sidebar-border;

        .sidebar-mobile {
          background: $navigation-background;
        }
      }
    }
  }
</style>

