import { pick, get } from 'lodash'

import types from './types'
import { formatPages, formatPage, navigationSorting } from './utils'

export default {
  [types.SITE_UPDATE]: (state, site) => {
    state.blog = pick(site, ['title', 'description', 'base'])
    state.pages = formatPages(get(site, 'pages', []))
    state.navigationItems = get(state, 'pages', [])
      .filter(page => !!page.navigation)
      .sort(navigationSorting)
  },

  [types.PAGE_UPDATE]: (state, page) => {
    state.current = formatPage(page)
  },

  [types.TOGGLE_SIDEBAR]: (state, sidebarState) => {
    state.sidebarOpen = sidebarState
  },

  [types.LOAD_START]: state => {
    state.loading = true
  },

  [types.LOAD_END]: state => {
    state.loading = false
  },

  [types.SEARCH]: (state, query) => {
    state.search = query
  }
}
