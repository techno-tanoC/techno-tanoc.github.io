<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const query = process.env.NODE_ENV === 'production' ? { draft: { $ne: true } } : {}

      const articles = await $content('articles')
        .only(['slug', 'title', 'date'])
        .where(query)
        .sortBy('date', 'desc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>
