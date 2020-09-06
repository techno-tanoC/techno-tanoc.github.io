export default {
  modules: ['@nuxt/content'],

  components: true,

  env: {
    NODE_ENV: process.env.NODE_ENV
  },

  generate: {
    dir: 'docs'
  }
}
