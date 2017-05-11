<template lang="pug">
  .article
    h1 {{ title }}
    h2 {{ date_0 }} {{ date_1 }}

    img(@src='logo')
    p(v-html='content')
</template>

<script>
export default {
  data() {
    return {

    }
  }

}
</script>