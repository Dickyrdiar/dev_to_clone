<template>
  <div class="display-article">
    <p>{{ article.title }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['article']),
  },

  mounted() {
    this.getArticle(this.id)
    console.log(this.article)
  },

  methods: {
    ...mapActions(['getArticle']),
  },
}
</script>
