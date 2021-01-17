<template>
  <div class="index">
    <div v-for="article in articles" :key="article.id">
      <p>{{ article.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['articles']),
  mounted() {
    this.$store.dispatch('letArticles')
  },
}
</script>
