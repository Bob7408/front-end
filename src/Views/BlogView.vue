<template lang="pug">
  .blog
    section.articles
      .article(v-for='article in articles')
        router-link.title(:to='"/article/" + article.id') {{ article.title }}
        span {{ readableDate(article.pub_date) }}
</template>

<script>
export default {
  data: () => ({
    articles: []
  }),

  mounted() {
    this.refresh()
  },

  methods: {
    refresh() {
      this.$http.get('article').then(response => response.json()).then(data => this.articles = data.results)
    }
  }
}
</script>