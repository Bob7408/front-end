<template lang="pug">
  .calendar
    section.next
      v-card.blue.darken-1.white--text(v-for='event in events', :key='event.id')
        v-card-text
          span.title {{ event.title }}
          span {{ readableDate(event.date) }}
          span {{ event.description }}

    section.map
      v-date-picker
</template>

<script>
export default {
  data: () => ({
    events: []
  }),

  mounted() {
    this.refresh()
  },

  methods: {
    refresh() {
      this.$http.get('agenda').then(response => response.json()).then(data => this.events = data.results)
    }
  }
}
</script>