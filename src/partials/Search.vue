<template>
  <div class="search">
    <input type="text" @input="searchInput"  :value="search" class="search-input" placeholder="Type to search" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState([ 'search' ]),
  methods: mapActions([ 'searchInput' ])
}
</script>

<style lang="scss">
  @import '../styles/variables';

  .search {
    height: $header-height;
    border-bottom: $sidebar-border;
    padding: 0 $base-height;

    .search-input {
      border: none;
      font-size: 0.9em;
      font-weight: 300;
      width: 100%;
      height: 100%;
    }
  }
</style>
