import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'https://api.cambodiafoodreview.com',
  key: process.env.GHOST_API_KEY,
  version: 'v3',
})

export async function getPosts(filter) {
  const filterQuery = `tag:${filter}`
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags, authors',
      filter: filterQuery,
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getPostsFiltered(filter) {
  let filterQuery = []
  filterQuery = filter.map((filters) => {
    return `tag:${filters}`
  })
  filterQuery = filterQuery.join('+')
  console.log(filterQuery)
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags, authors',
      filter: `tag:${filterQuery}`,
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getNewPosts(num) {
  return await api.posts
    .browse({
      limit: num,
      include: 'tags, authors',
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: 'authors',
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getPage(pageName) {
  return await api.pages
    .read({
      slug: pageName,
    })
    .catch((err) => {
      console.log(err)
    })
}
export async function getTagCount(tagName) {
  try {
    const returnObject = await api.tags
      .browse({
        include: 'count.posts',
        limit: 'all',
        filter: `description:${tagName}`,
      })
      .catch((err) => {
        throw err
      })
    return returnObject
  } catch (err) {
    if (err.response.status !== 404) {
      console.log(err)
    }
    return '0'
  }
}
