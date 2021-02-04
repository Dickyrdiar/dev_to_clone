<template>
  <div class="podcast">
    <div
      v-for="podcast in podcast_episodes"
      :key="podcast.id"
      :podcast="podcast"
    >
      <p>{{ podcast.title }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['podcast_episodes']),
  },

  mounted() {
    this.getPodcasts()
  },

  methods: {
    ...mapActions(['getPodcasts']),
  },
}
</script>
