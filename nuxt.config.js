export default {
  modules: [
    '@nuxt/content',
    '@nuxtjs/bulma'
  ],

  components: true,

  head: {
    title: 'TanoC Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes' },
    ]
  },

  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  generate: {
    dir: 'docs'
  }
}
