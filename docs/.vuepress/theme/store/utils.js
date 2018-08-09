import {
  toLower,
  includes
} from 'lodash'

import {
  map
} from 'lodash/fp'

const pluckData = page => Object.assign({}, page, page.frontmatter)

export const formatPages = map(pluckData)

export const formatPage = pluckData

export const navigationSorting = (a, b) =>
  (a.navigation > b.navigation) ? 1 : ((b.navigation > a.navigation) ? -1 : 0)

export const searchResults = (pages, query) => pages
  .filter(page => {
    const keys = [page.title, ...page.headers.map(({ title }) => title)]

    return keys.some(key => includes(toLower(key), toLower(query)))
  })
