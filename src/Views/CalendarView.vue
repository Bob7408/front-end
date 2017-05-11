<template lang="pug">
  .calendar
    section.next
      v-card.blue.darken-1.white--text(v-for='item in []', :key='item.id')
        v-card-text(v-html='item')
        //- title, place, date_0, date_1, description

    section.map
      v-data-picker
</template>