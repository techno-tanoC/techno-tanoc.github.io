<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
    <blog-prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()
      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy(['date', 'asc'])
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    }
  }
</script>
