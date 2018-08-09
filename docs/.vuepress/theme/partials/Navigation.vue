<template>
  <ul class="navigation" v-if="navigationItems.length > 0">
    <li class="list-item" v-for="item in navigationItems" :key="item.key">
      <router-link :to="item.path">{{ item.title }}</router-link>
    </li>
  </ul>
  <p class="no-results" v-else>
    No results
  </p>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters(['navigationItems'])
  }
</script>

<style lang="scss">
  @import '../styles/variables';

  .navigation {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    .list-item {
      margin: 0;
      padding: 10px 15px;
    }

    a {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.router-link-exact-active {
        color: $navigation-link-color;
      }
    }
  }

  .no-results {
    padding: 10px 15px;
  }
</style>


