<template>
  <div class="podcasts">
    <p>{{ podcast.title }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['podcast']),
  },

  mounted() {
    this.getPodcast(this.$route.params.podcast)
  },

  methods: {
    ...mapActions(['getPodcast']),
  },
}
</script>
