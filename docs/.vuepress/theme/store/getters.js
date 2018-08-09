import { getOr } from 'lodash/fp'
import { get } from 'lodash'

import { searchResults } from './utils'

export default {
  blog: getOr({}, 'blog'),
  current: getOr({}, 'current'),
  index: getOr({}, 'index'),
  loading: getOr(false, 'loading'),

  navigationItems: state => {
    if (!state.search) {
      return get(state, 'navigationItems', [])
    }

    return searchResults(state.pages, state.search)
  },

  sidebarOpen: getOr(false, 'sidebarOpen')
}
