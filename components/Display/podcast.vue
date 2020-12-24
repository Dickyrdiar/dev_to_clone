<template>
  <div class="podcast">
    <div class="md:caontainer md:mx-auto">
      <div v-for="podcast in podcasts" :key="podcast.id">
        <p>{{ podcast.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      podcasts: [],
      error: null,
    }
  },

  async mounted() {
    try {
      const res = await this.$axios.get('/podcast_episodes')
      this.podcasts = res.data
    } catch (error) {
      this.error = error
    }
  },
}
</script>
