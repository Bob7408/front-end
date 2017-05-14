<template lang="pug">
  .article
    h1 {{ article.title }}
    h2 {{ readableDate(article.pub_date) }}

    img(@src='article.logo')
    p(v-html='article.content')
</template>

<script>
export default {
  props: ['id'],

  data: () => ({
    article: {}
  }),

  mounted() {
    this.refresh()
  },

  methods: {
    refresh() {
      this.$http.get('article/' + this.id).then(response => response.json()).then(article => this.article = article)
    }
  }
}
</script>